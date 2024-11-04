// krakenThingSystemHelpers.test.js

import { krakenThingSystemHelpers } from "../krakenThingSystemHelpers";

describe("krakenThingSystemHelpers", () => {
  describe("isValid", () => {
    test("should return true for valid things", () => {
      const validThing = {
        "@type": "someType",
        "@id": "someId",
        "_version": "2.0",
        _propertyValues: [],
      };
      expect(krakenThingSystemHelpers.isValid(validThing)).toBe(true);
    });

    test("should return false for invalid things", () => {
      const invalidThing = { "@id": "missingType" };
      expect(krakenThingSystemHelpers.isValid(invalidThing)).toBe(false);
    });
  });

  describe("isThing", () => {
    test("should correctly identify an object as a thing", () => {
      const thing = { "@type": "thingType", "@id": "thingId" };
      expect(krakenThingSystemHelpers.isThing(thing)).toBe(true);
    });

    test("should return true ", () => {
      const notAThing = { "@type": "thingType" };
      expect(krakenThingSystemHelpers.isThing(notAThing)).toBe(true);
    });
  });

  describe("toThing", () => {
    test("should convert a valid input to thing", () => {
      const input = { "@type": "thingType", "@id": "thingId" };
      expect(
        krakenThingSystemHelpers.toThing(input)._propertyValues.length,
      ).toEqual(2);
    });
  });

  describe("toString", () => {
    test("should return the string representation of a thing", () => {
      const thing = { "@type": "thingType", "@id": "thingId" };
      expect(krakenThingSystemHelpers.toString(thing)).toBe("thingType thingId");
    });
  });

  describe("isEmpty", () => {
    test("should return true for empty objects", () => {
      expect(krakenThingSystemHelpers.isEmpty({})).toBe(true);
    });

    test("should return false for non-empty objects", () => {
      let v = krakenThingSystemHelpers.toThing({
        "@type": "type",
        name: "value",
      });
      expect(krakenThingSystemHelpers.isEmpty(v)).toBe(false);
    });
  });

  describe("keys", () => {
    test("should return keys of an object", () => {
      let obj = { "@type": "a", "@id": "b", key1: "value1", key2: "value2" };
      obj = krakenThingSystemHelpers.toThing(obj);
      expect(krakenThingSystemHelpers.keys(obj)).toEqual(["key1", "key2"]);
    });
  });

  describe("clone", () => {
    test("should clone an object correctly", () => {
      const obj = { "@type": "type", "@id": "abc123", key: "value" };
      const systemObj = krakenThingSystemHelpers.toThing(obj);
      const cloned = krakenThingSystemHelpers.clone(systemObj);
      expect(cloned?.["@id"]).not.toBe(obj?.["@id"]);
      expect(cloned?.["@type"]).toBe(obj?.["@type"]);
    });
  });


  describe("ref", () => {
    test("should return a ref record", () => {
      
      const obj = { "@type": "type", "@id": "abc123", key: "value" };
      
      const result = krakenThingSystemHelpers.ref.get(obj)
      const expectedResult = { "@type": "type", "@id": "abc123"};
      
      expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));
    });
  });



  describe("merge", () => {
    test("should merge objects correctly", () => {
      let input1 = {
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        name2: "name2",
      };

      let input2 = {
        "@type": "Thing",
        "@id": "thing1",
        name: "thing2",
        name3: "name3",
      };

      input1 = krakenThingSystemHelpers.toThing(input1, null, {credibility:0.5});
      input2 = krakenThingSystemHelpers.toThing(input2, null, {credibility:0.6});

      let expectedResult = {
        "@type": "Thing",
        "@id": "thing1",
        name: "thing2",
        name2: "name2",
        name3: "name3",
      };
      let mergeThing = krakenThingSystemHelpers.merge(input1, input2);
      let mergeRecord = krakenThingSystemHelpers.record.get(mergeThing);

      let result =
        JSON.stringify(mergeRecord) == JSON.stringify(expectedResult);

      //console.log(result)

      //console.log(JSON.stringify(mergeRecord, null, 4))

      //console.log(krakenThingSystemHelpers.toStringDetailed(mergeThing))

      expect(mergeRecord).toEqual(expectedResult);
    });

    test("should not merge objects not same", () => {
      let input1 = {
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        name2: "name2",
      };

      let input2 = {
        "@type": "Thing",
        "@id": "thing3",
        name: "thing1",
        name3: "name3",
      };

      let input1System = krakenThingSystemHelpers.toThing(input1);
      let input2System = krakenThingSystemHelpers.toThing(input2);

      let expectedResult = {
        "@type": "Thing",
        "@id": "thing1",
        name: ["thing2", "thing1"],
        name2: "name2",
        name3: "name3",
      };
      let mergeThing = krakenThingSystemHelpers.merge(input1System, input2System);
      let mergeRecord = krakenThingSystemHelpers.record.get(mergeThing);

      let result =
        JSON.stringify(mergeRecord) != JSON.stringify(expectedResult);

      //console.log(result)

      //console.log(JSON.stringify(mergeRecord, null, 4))

      //console.log(krakenThingSystemHelpers.toStringDetailed(mergeThing))

      expect(mergeRecord).toEqual(input1);
    });
  });

  describe("Dedupe", () => {
    test("should dedupe list of objects", () => {
      let input1 = {
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        name2: "name2",
      };

      let input2 = {
        "@type": "Thing",
        "@id": "thing2",
        name: "thing2",
        name3: "name2",
      };

      let input3 = {
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        name3: "name1",
      };

      input1 = krakenThingSystemHelpers.toThing(input1);
      input2 = krakenThingSystemHelpers.toThing(input2);
      input3 = krakenThingSystemHelpers.toThing(input3);

      let inputs = [input1, input2, input3];

      //console.log(krakenThingSystemHelpers.toString(inputs))

      let dedupedThings = krakenThingSystemHelpers.dedupe(inputs);

      let dedupedRecords = krakenThingSystemHelpers.record.get(dedupedThings);
      let expectedResult = [
        {
          "@type": "Thing",
          "@id": "thing2",
          name: "thing2",
          name3: "name2",
        },
        {
          "@type": "Thing",
          "@id": "thing1",
          name: "thing1",
          name2: "name2",
          name3: "name1",
        },
      ];

      //let result = JSON.stringify(dedupedRecords) == JSON.stringify(JSON.stringify(dedupedRecords))
      expect(JSON.stringify(dedupedRecords)).toEqual(
        JSON.stringify(expectedResult),
      );
    });

    test("should dedupe list of objects", () => {
      let input1 = {
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        name2: "name2",
      };

      let input2 = {
        "@type": "Thing",
        "@id": "thing2",
        name: "thing2",
        name3: "name2",
      };

      let input3 = {
        "@type": "Thing",
        "@id": "thing3",
        name: "thing3",
        name3: "name3",
      };

      input1 = krakenThingSystemHelpers.toThing(input1);
      input2 = krakenThingSystemHelpers.toThing(input2);
      input3 = krakenThingSystemHelpers.toThing(input3);

      let inputs = [input1, input2, input3];

      //console.log(krakenThingSystemHelpers.toString(inputs))

      let dedupedThings = krakenThingSystemHelpers.dedupe(inputs);

      let dedupedRecords = krakenThingSystemHelpers.record.get(dedupedThings);
      let expectedResult = [
        {
          "@type": "Thing",
          "@id": "thing1",
          name: "thing1",
          name2: "name2",
        },
        {
          "@type": "Thing",
          "@id": "thing2",
          name: "thing2",
          name3: "name2",
        },
        {
          "@type": "Thing",
          "@id": "thing3",
          name: "thing3",
          name3: "name3",
        },
      ];

      let result =
        JSON.stringify(dedupedRecords) == JSON.stringify(expectedResult);
      expect(result).toEqual(true);
    });
  });

  describe("flatten", () => {
    test("should return all things and sub things", () => {
      let input1 = {
        "@type": "ItemList",
        "@id": "ItemList0",
        name: "ItemList0",
        itemListElement: [
          {
            "@type": "ListItem",
            "@id": "ListItem0",
            name: "ListItem0",
            position: 0,
            previousItem: null,
            nextItem: {
              "@type": "ListItem",
              "@id": "ListItem1",
            },
            item: {
              "@type": "Thing",
              "@id": "Thing0",
              name: "Thing0",
              url: "https://www.test.com/thing0",
            },
          },
          {
            "@type": "ListItem",
            "@id": "ListItem1",
            name: "ListItem1",
            position: 1,
            previousItem: {
              "@type": "ListItem",
              "@id": "ListItem0",
            },
            nextItem: {
              "@type": "ListItem",
              "@id": "ListItem2",
            },
            item: {
              "@type": "Thing",
              "@id": "Thing1",
              name: "Thing1",
              url: "https://www.test.com/thing1",
            },
          },
          {
            "@type": "ListItem",
            "@id": "ListItem2",
            name: "ListItem2",
            position: 2,
            previousItem: {
              "@type": "ListItem",
              "@id": "ListItem1",
            },
            nextItem: {
              "@type": "ListItem",
              "@id": "ListItem3",
            },
            item: {
              "@type": "Thing",
              "@id": "Thing2",
              name: "Thing2",
              url: "https://www.test.com/thing2",
            },
          },
          {
            "@type": "ListItem",
            "@id": "ListItem3",
            name: "ListItem3",
            position: 3,
            previousItem: {
              "@type": "ListItem",
              "@id": "ListItem2",
            },
            nextItem: null,
            item: {
              "@type": "Thing",
              "@id": "Thing3",
              name: "Thing3",
              url: "https://www.test.com/thing3",
            },
          },
        ],
      };

      input1 = krakenThingSystemHelpers.toThing(input1);

      //console.log(krakenThingSystemHelpers.toStringDetailed(input1))

      //console.log(JSON.stringify(krakenThingSystemHelpers.record.get(input1), null, 4))

      let children = krakenThingSystemHelpers.flatten(input1);

      //console.log(JSON.stringify(children, null, 4))

      // COnvert to json record
      let childrenRecords = krakenThingSystemHelpers.record.get(children);

      let expectedResult = [
        {
          "@type": "ItemList",
          "@id": "ItemList0",
          itemListElement: [
            {
              "@type": "ListItem",
              "@id": "ListItem0",
            },
            {
              "@type": "ListItem",
              "@id": "ListItem1",
            },
            {
              "@type": "ListItem",
              "@id": "ListItem2",
            },
            {
              "@type": "ListItem",
              "@id": "ListItem3",
            },
          ],
          name: "ItemList0",
        },
        {
          "@type": "ListItem",
          "@id": "ListItem0",
          item: {
            "@type": "Thing",
            "@id": "Thing0",
          },
          name: "ListItem0",
          nextItem: {
            "@type": "ListItem",
            "@id": "ListItem1",
          },
          position: 0,
        },
        {
          "@type": "ListItem",
          "@id": "ListItem1",
          item: {
            "@type": "Thing",
            "@id": "Thing1",
          },
          name: "ListItem1",
          nextItem: {
            "@type": "ListItem",
            "@id": "ListItem2",
          },
          position: 1,
          previousItem: {
            "@type": "ListItem",
            "@id": "ListItem0",
          },
        },
        {
          "@type": "ListItem",
          "@id": "ListItem2",
          item: {
            "@type": "Thing",
            "@id": "Thing2",
          },
          name: "ListItem2",
          nextItem: {
            "@type": "ListItem",
            "@id": "ListItem3",
          },
          position: 2,
          previousItem: {
            "@type": "ListItem",
            "@id": "ListItem1",
          },
        },
        {
          "@type": "ListItem",
          "@id": "ListItem3",
          item: {
            "@type": "Thing",
            "@id": "Thing3",
          },
          name: "ListItem3",
          position: 3,
          previousItem: {
            "@type": "ListItem",
            "@id": "ListItem2",
          },
        },
        {
          "@type": "Thing",
          "@id": "Thing0",
          name: "Thing0",
          url: "https://www.test.com/thing0",
        },
        {
          "@type": "Thing",
          "@id": "Thing1",
          name: "Thing1",
          url: "https://www.test.com/thing1",
        },
        {
          "@type": "Thing",
          "@id": "Thing2",
          name: "Thing2",
          url: "https://www.test.com/thing2",
        },
        {
          "@type": "Thing",
          "@id": "Thing3",
          name: "Thing3",
          url: "https://www.test.com/thing3",
        },
      ];
      //let result =
        JSON.stringify(childrenRecords) == JSON.stringify(expectedResult);

      //console.log(JSON.stringify(childrenRecords, null, 4))

      //console.log(result)
      expect(childrenRecords).toEqual(expectedResult);
    });
  });




  describe("replace", () => {
    test("should replace usb values", () => {
      const record = {
          "@type": "Thing",
          "@id": "thing1",
          "name": "thing1",
          "other": {
              "@type": "Thing",
              "@id": "thing2",
              "name": "thing2",
            }
        }
      let thing = krakenThingSystemHelpers.toThing(record);

      let replaced = {
        "@type": "Thing",
          "@id": "thing2",
      }

      
      let replacee = {
          "@type": "Thing",
          "@id": "thing3",
          "name": "thing3",
        }

      replacee = krakenThingSystemHelpers.toThing(replacee);

      let expectedResult = {
          "@type": "Thing",
          "@id": "thing1",
          "name": "thing1",
          "other": {
            "@type": "Thing",
            "@id": "thing3",
            "name": "thing3",
          }
        }


      let result = krakenThingSystemHelpers.replace(thing, replaced, replacee);


      result = krakenThingSystemHelpers.record.get(result);
      
      expect(result).toEqual(expectedResult);
    });
  });

  
  
});
