# cognitev

## Installing
just run 
```
docker pull abdelrhmanali/cognitev
```

### or clone repo and run 

```
npm install

npm start
```
## To see graphe for Campains

* [Graphe](http://localhost:5050/)

## I make a Campaign api 

## EndPoints


## GET/ 
### http://localhost:5050/api/
```js
// Get all Campaign
fetch(' http://localhost:5050/api/')
    .then(response => response.json())
    .then(json => console.log(json))
/* will return
[
    {
        _id: ...,
        name: ...,
        country: ...,
        budget: ...,
        goal: ...,
        category: ...
    },
    ...
]
*/
```

## post/
### http://localhost:5050/api/
```js
//Add Campaign 
fetch('http://localhost:5050/api/', {
    method: 'POST',
    body: JSON.stringify({
        name: ...,
        country: ...,
        budget: ...,
        goal: ...,
        category: ...
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json))

/* will return
{
    _id: ...,
    name: ...,
    country: ...,
    budget: ...,
    goal: ...,
    category: ...
}
*/
```

## DELETE/
### http://localhost:5050/api/
```js
//Delete Campaign 
fetch('http://localhost:5050/api/:id', {
  method: 'DELETE'
})
    .then(response => response.json())
    .then(json => console.log(json))
/* 
will return :
{
    done: true
}
*/
```
## PUT/
### http://localhost:5050/api/

```js
//Update Campaign 
fetch('http://localhost:5050/api/', {
    method: 'PUT',
    body: JSON.stringify({
        name: ...,
        country: ...,
        budget: ...,
        goal: ...,
        category: ...
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
})
  .then(response => response.json())
  .then(json => console.log(json))

/* will return
{
    _id: ...,
    name: ...,
    country: ...,
    budget: ...,
    goal: ...,
    category: ...
}
*/
```