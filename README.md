# Tiedot

Node.js Tiedot client.

## Installation

To install tiedot, run:

    yarn add tiedot
    
This will download the Tiedot client and add a dependency entry in your **package.json** file.

## Connecting to tiedot

```JS
const Tiedot = require("tiedot");

const client = new Tiedot("http://localhost:5050");
```

## Usage

### Manage collections

```JS

// Create collection
await bucket.create("Users");

// Rename Collection
await bucket.rename("Users", "Contacts");

// Drop collection
await bucket.drop("Users");
```

### Manage documents

```JS

// Insert
await bucket.insert("Users", {
    username: "yasaricli",
});

// Get
await bucket.insert("Users", "id");

// Update
const updateRequest = await bucket.update("Users", "id", {
  username: "osman",
});

// Remove
await bucket.remove("Users", "id");
```

## Docker Run 

To pull and start the Tiedot container, run this docker run command in the terminal or command-line for your operating system.

    docker pull lichti/tiedot
    docker run --name tiedot -d -p 5050:8080 lichti/tiedot
    
![Screen Shot 2021-08-31 at 22 12 27](https://user-images.githubusercontent.com/1306620/131562061-8b6aa0ca-7943-41d3-aab9-66027ac283ee.png)

`Tiedot` is a **document database** engine that uses **JSON** as document notation [HouzuoGuo/tiedot](https://github.com/HouzuoGuo/tiedot)
