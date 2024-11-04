
import { transformData } from '../schemaTransform.js'



describe('transformData', () => {

  it('should correctly map simple fields', () => {
    const inputData = {
      userName: 'John',
      userAge: 25
    };

    const expectedOutput = {
      name: 'John',
      age: 25
    };

    const result = transformData(inputData);
    expect(result).toEqual(expectedOutput);
  });

  it('should correctly map nested fields', () => {
    const inputData = {
      address: {
        city: 'New York',
        postalCode: '10001'
      }
    };

    const expectedOutput = {
      location: {
        cityName: 'New York',
        zipCode: '10001'
      }
    };

    const result = transformData(inputData);
    expect(result).toEqual(expectedOutput);
  });

  it('should correctly map arrays', () => {
    const inputData = {
      hobbies: ['Reading', 'Traveling']
    };

    const expectedOutput = {
      interests: ['Reading', 'Traveling']
    };

    const result = transformData(inputData);
    expect(result).toEqual(expectedOutput);
  });

  it('should correctly map deeply nested fields', () => {
    const inputData = {
      contactInfo: {
        phone: {
          home: '123-456-7890',
          work: '098-765-4321'
        }
      }
    };

    const expectedOutput = {
      contacts: {
        phoneNumbers: {
          homePhone: '123-456-7890',
          workPhone: '098-765-4321'
        }
      }
    };

    const result = transformData(inputData);
    expect(result).toEqual(expectedOutput);
  });

  it('should correctly handle complete data structure', () => {
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

    const expectedOutput = {
      name: 'John',
      age: 25,
      location: {
        cityName: 'New York',
        zipCode: '10001'
      },
      interests: ['Reading', 'Traveling'],
      contacts: {
        emailAddress: 'john@example.com',
        phoneNumbers: {
          homePhone: '123-456-7890',
          workPhone: '098-765-4321'
        }
      }
    };

    const result = transformData(inputData);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle missing fields gracefully', () => {
    const inputData = {
      userName: 'John',
      address: {}
    };

    const expectedOutput = {
      name: 'John',
      location: {
        cityName: undefined,
        zipCode: undefined
      }
    };

    const result = transformData(inputData);
    expect(result).toEqual(expectedOutput);
  });

});
