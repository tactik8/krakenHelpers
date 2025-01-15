# Kraken element

## Overview
Classes associated to elements that provides record capabilities.

## How to use


### HTML Code

```

<div class="krThing" data-record-type="Thing" data-record-id="thing1">

    <div class="krProperty" data-propertyID="name" data-templateID="template1">

    </div>


</div>


```

### JS code

```
import { krakenElements  } from "../../src/krakenElementsV3/krakenElements.js"

let engine = new krakenElements.KrElementEngine()

let record = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1",
        "image": {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "image1",
                "name": "image_1",
                "contentUrl": "https://placehold.co/600x400"
            }
    }
engine.record.set(record)

```


## Solution overview


### Events
- krDraggable: makes element draggable
- krDropzone: make element a dropzone for draggable



## Classes

### KrElementEngine

- register: register an element in the element engine
- addEventListener: add an event listener to listen to changes to specific thing
- getController: get the controller associated with an element
- setController: set a controller within the element engine
- getTemplate: get a specific template from the engine
- setTemplate: add a template to the engine
- getThing: get a thing from the engine
- setThing: set a thing in the engine
- getRecord: get the record of a thing from the engine
- setRecord: set the record
- getSystemRecord: get system record of a thing
- setSystemRecord: set system record



### KrElementController


Attributes:
- record_type
- record_id
- record

Methods:
- render: rendcer the element if a thing exist
- record
- ref
- propertyID
- valueID
- templateID
- element
- engine
- template
- record