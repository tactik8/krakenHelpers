import { krakenNullHelpers as h } from "./krakenNullHelpers.js";

export const krakenTranslateHelpers = {
    get: getWord,
};

function getWord(expression, locale) {
    // Retrieve language
    let language = locale.slice(0, 2);
    language = language.toLowerCase();

    // Retrieve country
    let country;
    if (locale.length == 5) {
        country = locale.slice(3, 5);
    } else if (locale.length == 4) {
        country = locale.slice(2, 4);
    } else {
        country = null;
    }
    country = country.toUpperCase();

    // ReDefine proper locale
    let l = language + "-" + String(country);

    // Refine word
    expression = expression.trim();
    expression = expression.toLowerCase();

    // Get word

    let library = getLibrary();

    let newWord = library?.[expression]?.[l] || null;

    if (h.isNotNull(newWord)) {
        return newWord;
    }

    // Get generic country

    if (language == "en") {
        country = "US";
    }

    if (language == "fr") {
        country = "CA";
    }

    l = language + "-" + String(country);

    newWord = library?.[expression]?.[l] || null;

    if (h.isNotNull(newWord)) {
        return newWord;
    }

    return null;
}

function getLibrary() {
    let record = {
        submit: {
            "en-US": "submit",
            "fr-CA": "soumettre",
        },
        givenName: {
            "en-US": "first name",
            "fr-CA": "prénom",
        },
        familyName: {
            "en-US": "family name",
            "fr-CA": "nom de famille",
        },
    };

    return record;
}
