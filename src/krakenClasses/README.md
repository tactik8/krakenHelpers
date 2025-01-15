# Kraken thing

## Overview
Class to handle schema.org thing objects.

## How to use

```

import { krakenClasses } from "../../src/krakenClasses/krakenClasses.js";

let thing = new krakenClasses.KrThing()



```

## krThing
Represents a single thing record

### Attributes and methods

#### Static methods
- toThing
- new
- 

#### Attributes

- json
- record_type
- record_id
- ref
- record
- system: system record
- children: things that are value of current thing
- name
- url
- itemListElement
- item
- other
- 

#### Methods

- toString
- toJSON
- get: get value of property
- set: set value of property
- add:
- delete:
- getValues:
- getValue
- replaceValue
- addValue
- deletaValue
- getPropertyValues
- getPropertyValue
- isSame
- isNotSame:
- eq
- ne
- lt
- gt
- merge
- mergeDeep

### List attributes and methods
#### List attributes 
- position
- 

#### List methods
-
- insert
- 

## krThings
Represent a database of krThing objects.

### Considerations
- Identical things (same type and id) will be merged together
- 

### Attribute and methods


#### Attributes


#### Methods
- registerThing: register thing in database
- thingGet: get thing from db
- thingSet: set thing in db, merge if exists
- get: same as thingGet
- getAll: 
- set: same as tingSet
- delete:
- length: no oif thing in db
- clear: delete all
- merge: merge two krThings
- filter: filter things
- sort: sort things
- systemGet
- systemSet
- addEventListener: register for krThings broadcast

#### Aciton methods
- execute: execute an action 
