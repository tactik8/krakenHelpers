
import { actionMenu } from './src/actionMenu.js'

import { article } from "./src/article.js";

import { card } from "./src/card.js";
import { cardHorizontal } from "./src/cardHorizontal.js";


import { callToAction } from "./src/callToAction.js";


import { css } from "./src/css.js";

import { features } from "./src/features.js";

import { footer } from "./src/footer.js";
import { form } from "./src/form.js";

import { header } from "./src/header.js";
import { hero } from "./src/hero.js";

import { howTo } from "./src/howTo.js";

import { icons } from "./src/icons.js";

import { itemlist } from "./src/itemlist.js";
import { jsonld } from "./src/jsonld.js";

import { line } from "./src/line.js";
import { listitem } from "./src/listitem.js";
import { navbar } from "./src/navbar.js";
import { page } from "./src/page.js";
import { pill } from "./src/pill.js";


import { pricing } from "./src/pricing.js";

import { record } from "./src/record.js";


import { userConsent } from "./src/userConsent.js";

import { contentHead } from "./src/contentHead.js";
import { contentBody } from "./src/contentBody.js";
import { propertyValues } from "./src/propertyValues.js";

propertyValues

import { krakenBaseHelpers as h } from "../base/krakenBaseHelpers.js";
import { krakenClasses } from "../../../krakenClasses/krakenClasses.js";

export const krakenSimpleHtmlHelpers = {
    actionMenu: actionMenu,
    article: article,
    callToAction: callToAction,
    card: card,
    cardHorizontal: cardHorizontal,
    css: css,
    features: features,
    footer: footer,
    form: form,
    hero: hero,
    howTo: howTo,
    icons: icons,
    itemlist: itemlist,
    jsonld: jsonld,
    line: line,
    listitem: listitem,
    navbar: navbar,
    page: page,
    pill: pill,
    pricing: pricing,
    propertyValues:propertyValues,
    record: record,
    userConsent: userConsent,
    landingPage: getLandingPage,
    contentHead: contentHead,
    contentBody: contentBody,
};

function getLandingPage(records) {
    /**
     * Get elements of landing page
     */

    let content = "";

    let count = 0;

    for (let r of records) {
        r = h.heading.addHeadings(r);

        let krakenClasses = [];
        let partContent = "";

        switch (r?.["@type"]) {
            case "Article":
                partContent += h.template.render(article(), r);
                break;
            case "CreativeWork":
                partContent += h.template.render(hero(), r);
                break;
            case "HowTo":
                partContent += h.template.render(howTo(), r);
                break;
            case "Product":
                partContent += h.template.render(features(), r);
                break;
            case "OfferCatalog":
                partContent += h.template.render(pricing(), r);
                break;
            case "Action":
                partContent += h.template.render(callToAction(), r);
                break;
        }

        // Get classes
        if (count == 0) {
            krakenClasses.push("text-bg-dark");
            krakenClasses.push("bg-gradient ");
        }

        if (count != 0 && h.number.isEven(count)) {
            krakenClasses.push("text-bg-secondary");
        }

        // Increment counter
        count += 1;
        
        // Compile content
        content += `
        <section 
        class="aos-init aos-animate ${krakenClasses.join(" ")} pt-5 pb-5"
        data-aos="fade-down"
        data-aos-offset="300"
        > 
            ${partContent} 
        </section>`;

    }
    return content;
}
