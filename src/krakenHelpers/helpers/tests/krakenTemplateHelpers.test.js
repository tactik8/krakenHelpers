import { krakenHelpers as h } from "../../../index.js";

describe("templateHelpers", () => {
    test("basic template", () => {
        let template1 =
            "This is a test -name- {{name}} with -other.name- {{other.name}}";

        let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            name: "thing1",
            other: {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing2",
                name: "thing2",
            },
        };
        let expectedResult =
            "This is a test -name- thing1 with -other.name- thing2";

        let result = h.template.get(template1, record);

        expect(result).toBe(expectedResult);
    });

    test("enhanced template", () => {
        let template1 =
            "This is a test -name- {{name}} with -other.names- {{#other}}{{name}} {{/other}}";

        let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            name: "thing1",
            other: [
                {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing2",
                    name: "thing2",
                },
                {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing3",
                    name: "thing3",
                },
            ],
        };
        let expectedResult =
            "This is a test -name- thing1 with -other.name- thing2";

        let result = h.template.get(template1, record);

        expect(result).toBe(expectedResult);
    });
});
