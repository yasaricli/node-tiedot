const Tiedot = require("../index");

// Bucket Tiedot
const bucket = new Tiedot("http://localhost:5050");

test("Create Collection", async () => {
  const request = await bucket.create("Users");

    console.log(request.status);

  // expect(request.status).toBe("success");
});

test("Drop Collection", async () => {
  // expect(true).toBe(true);
});

async () => {
  const server = new Tiedot("http://localhost:5050");

  const dropRequest = await server.drop("Users");
  console.log(dropRequest, "DROP COLLECTION");

  const collectionRequest = await server.create("Users");
  console.log(collectionRequest, "CREATE COLLECTION");

  const doc = await server.insert(collectionRequest.data.collection, {
    username: "yasaricli",
  });
  console.log(doc, "INSERT DATA");

  const get = await server.get(collectionRequest.data.collection, doc.data.id);
  console.log(get, "GET DATA");

  const update = await server.update(
    collectionRequest.data.collection,
    doc.data.id,
    {
      username: "ali",
    }
  );

  console.log(update, "UPDATE DATA");

  const del = await server.remove(
    collectionRequest.data.collection,
    doc.data.id
  );
  console.log(del, "REMOVE DATA");
};
