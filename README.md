# wingjs
API wrapper for wing.eu

## Install
`npm install --save wingjs`

## Example
```javascript
const Wing = require('wingjs')

const wing = new Wing("WING_API_ID", "WING_API_SECRET")
wing.Item.find((response, error) => {
    console.log(error || response)
})
```

## Documention
#### User
```javascript
//get yourself
wing.User.me(callback)

//Create new user
wing.User.new(newUser, callback)

//Update yourself
wing.User.update(updatedUser, callback)

//Get your api key
wing.User.apiKey(callback)

//Generate new api key
wing.User.generateApiKey(callback)
```

#### Organization
```javascript
//Create new Organization
wing.Organization.create(newOrganization, callback)

//Get your current Organization
wing.Organization.current(callback)

//Update your current Organization
wing.Organization.update(updatedOrganization, callback)
```

#### Service
```javascript
//Get all available Services
wing.Service.available(callback)

//Get you default Service
wing.Service.default(callback)

//Set default Service
wing.Service.setDefault(callback)
```

#### Order, Item, Store, Channel, Customer, Collect
Those are CRUD endpoints so they work the same way, i.e
```javascript
wing.(Order|Item|Store|Channel|Customer|Collect).create(newItem, (response, error) => {
    console.log(error || response)
})
```

All functions:
```javascript
//Create new object
wing.*.create(newObject, callback)

//Find
wing.*.find(callback)
OR
wing.*.find(searchParams, callback)

//Get a object with ID
wing.*.get(id, callback)

//Update
wing.*.update(id, updatedObject, callback)

//Delete
wing.*.delete(id, callback)
```

# LICENSE
MIT