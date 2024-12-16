import { KrElementEngine } from "./src/engine/krakenElementEngine/krakenElementEngine.js";

import { KrElementRecord } from "./src/krakenElementRecord/krakenElementRecord.js";
import { KrElementBase } from "./src/krakenElementBase/krakenElementBase.js";
import { KrElementCard } from "./src/krakenElementCard/krakenElementCard.js";

import { KrElementProperty } from "./src/krakenElementProperty/krakenElementProperty.js";
import { KrElementValue } from "./src/krakenElementValue/krakenElementValue.js";

import { KrElementInput } from "./src/form/krakenElementInput/krakenElementInput.js";
import { KrElementForm } from "./src/krakenElementForm/krakenElementForm.js";

import { KrElementList } from "./src/krakenElementList/krakenElementList.js";
import { KrElementListItem } from "./src/krakenElementListItem/krakenElementListItem.js";

import { KrElementActionButton } from "./src/action/krakenElementActionButton/krakenElementActionButton.js";

import { KrElementActionMenu } from "./src/action/krakenElementActionMenu/krakenElementActionMenu.js";


import { KrElementGeneric } from "./src/krakenElementGeneric/krakenElementGeneric.js";

import { KrElementLine } from "./src/krakenElementLine/krakenElementLine.js";
import { KrElementStarInput } from "./src/form/krakenElementStarInput/krakenElementStarInput.js";

import { KrElementStatusInput } from "./src/form/krakenElementStatusInput/krakenElementStatusInput.js";


export const krakenElementsV2 = {
    KrElementEngine: KrElementEngine,
    KrElementRecord: KrElementRecord,
    KrElementBase: KrElementBase,
    KrElementCard: KrElementCard,
    KrElementProperty : KrElementProperty,
    KrElementInput: KrElementInput,
    KrElementGeneric: KrElementGeneric,
    KrElementLine: KrElementLine,
    KrElementStarInput: KrElementStarInput,
    KrElementStatusInput: KrElementStatusInput,
    KrElementForm: KrElementForm,
    KrElementValue: KrElementValue,
    KrElementList:KrElementList,
    KrElementListItem: KrElementListItem,
    KrElementActionButton: KrElementActionButton,
    KrElementActionMenu: KrElementActionMenu
};
