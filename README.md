# Tiedot

Node.js Tiedot client.

## Installation

To install tiedot, run:

    yarn add tiedot
    
This will download the Tiedot client and add a dependency entry in your **package.json** file.

## Connecting to tiedot

```JS
const Tiedot = require("tiedot");

cons client = new Tiedot("http://localhost:5050");
```


## Docker Run 

To pull and start the Tiedot container, run this docker run command in the terminal or command-line for your operating system.

    docker pull lichti/tiedot
    docker run --name tiedot -d -p 5050:8080 lichti/tiedot

`Tiedot` is a **document database** engine that uses **JSON** as document notation [HouzuoGuo/tiedot](https://github.com/HouzuoGuo/tiedot)
