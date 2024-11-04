




export function transformData(inputData, schemaMapping) {
  
  /**
   *schemaMapping = {
    userName: 'name',
    userAge: 'age',
    'address.city': 'location.cityName',
    'address.postalCode': 'location.zipCode',
    hobbies: 'interests',
    'contactInfo.email': 'contacts.emailAddress',
    'contactInfo.phone.home': 'contacts.phoneNumbers.homePhone',
    'contactInfo.phone.work': 'contacts.phoneNumbers.workPhone',
  };
   *
   *
   *
   * 
   */

  function mapSchema(input, schema) {
    const output = {};

    Object.keys(schema).forEach((key) => {
      const value = schema[key];

      if (typeof value === 'string') {
        // Handle deep key paths like 'address.city'
        const keys = value.split('.');
        setNestedValue(output, keys, getNestedValue(input, key.split('.')));
      } else if (Array.isArray(value)) {
        // Handle lists or arrays
        output[key] = value.map(item => mapSchema(item, schema));
      } else if (typeof value === 'object') {
        // Handle nested objects
        output[key] = mapSchema(input[key], schema[key]);
      } else {
        // Direct mapping
        output[key] = input[key];
      }
    });

    return output;
  }

  function getNestedValue(obj, keys) {
    return keys.reduce((o, key) => (o ? o[key] : undefined), obj);
  }

  function setNestedValue(obj, keys, value) {
    keys.reduce((o, key, index) => {
      if (index === keys.length - 1) {
        o[key] = value;
      } else {
        o[key] = o[key] || {};
      }
      return o[key];
    }, obj);
  }

  // Apply transformation using the mapping
  return mapSchema(inputData, schemaMapping);
}

// Example usage
const inputData = {
  userName: 'John',
  userAge: 25,
  address: {
    city: 'New York',
    postalCode: '10001'
  },
  hobbies: ['Reading', 'Traveling'],
  contactInfo: {
    email: 'john@example.com',
    phone: {
      home: '123-456-7890',
      work: '098-765-4321'
    }
  }
};

const transformedData = transformData(inputData);
console.log(JSON.stringify(transformedData, null, 2));
