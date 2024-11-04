

## Running tests
```
node --experimental-vm-modules node_modules/.bin/jest
```

## Publish
```
npm adduser
npx parcel build
npm publish
```




## Modules 

### Base modules

#### null
- isNull
- isNotNull
- isEqual
- isNotEqual
- isEven
- isOdd

#### number
- isValid:
- toNumber:
- toString
- round
- isEven
- isOdd

#### string
- isValid
- toCamelCase
- fromCamelCase
- capitalize
- clean
- 

#### array
- isValid
- toString
- toArray
- keys
- getValuesForKey
- GetNumbersForKey
- merge
- mergeUnique

#### object
- isValiud
- toString
- keys
- merge
- 

#### date
- isValid
- toString
- now
- toDate
- isTextDate
- duration
- human:
    - date
    - duration
- iso:
    - getIsoDurationFromDates
    - getTextFromIsoDuration
    - getIsoDurationFromText

#### url
- isValid
- toUrl
- getUrl
- domain

#### uuid
- isValid
- toString
- new

#### value
- sValid
- toText
- getType
- innerValuesToText

### Manipulation

#### dot
- get
- set
- add
- toDot
- fromDot
- propertyPath:
    - getCurrentKey: returns first key (key1[1].key2[2] -> key1)
    - getCurrentPosition: return first position (key1[1].key2[2] -> 1)
    - getNextItems: (key1[1].key2[2] -> key2[2])

#### json
- isValid
- flatten
- simplify

#### email
- isValid
- getDomain
- getUsername

#### regex
- isValid
- regexFromString
- test

### Element
#### element
- isValid
- reord_type
- record_id
- id
- type (thing, property, value)
- insert:
    - above
    - below
- remove
- content:
    - get
    - set
- active (krActive class):
    - set
    - unset
    - toggle
- selected (krSelected class):
    - get
    - set
    - unset
    - toggle
- dragging (krDragging class)
    - get
    - set
    - unset
    - toggle
- class:
    - get
    - set
    - unset
    - toggle
- traversal
    - commonParent
- filter
- meetsConditions


### 
#### file

### XXX

#### template

#### translate

### things


#### thingHelpers
- isValid
- toString
- record_type (get, set)
- record_id (get, set)
- ref (get, set)
- value (get, set)
- values (get, set)
- getValue
- getValues
- isSame
- isNotSame
- eq
- ne
- lt
- gt
- 

#### thingSystemHelpers

#### thingActionHelpers
- new
- clone
- isValid
- isEmpty
- isNotEmpty
- keys
- toString
- toJSON
- getProperty
- getProperties
- getSubActions
- isComplete
- isFailed
- isSame
- isNotSame
- eq
- ne
- lt
- gt
- merge
- setPotential
- setActive
- SetCompleted
- setFailed
- convertToHowTo
- dedupe
- filter
- find
- length
- pop
- push
- sort


#### elementThingHelpers
- record_type (get, set)
- record_id (get, set)
- ref (get, set)
- init:
- record: (get, set, delete)
- render
- parts:
    - get
    - add
    - header
    - main
    - footer
    - nav
    - aside
    - sections
    - template
- type:
    - get, set, delete, getNext)
    - setAsThing
    - setAsProperty
    - setAsValue
- current:
    - thing (get)
    - property (get)
    - value (get)
- parent:
    - thing (get)
    - property (get)
    - value (get)
- top:
    - thing (get)
    - property (get)
    - value (get)
- children:
    - things (get)
    - properties (get)
    - values (get)
- childrenAll:
    - things (get)
    - properties (get)
    - values (get)

### tools

#### Log helpers

#### textTable

#### timer

