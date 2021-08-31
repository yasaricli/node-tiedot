const Tiedot = require("../index");

// Bucket Tiedot
const bucket = new Tiedot("http://localhost:5050");

describe("Collections Create, Rename, Drop", () => {
  beforeAll(async () => {
    // drop table
    await bucket.drop("Users");
    await bucket.drop("Contacts");
  });

  test("Create", async () => {
    const request = await bucket.create("Users");

    expect(request.status).toBe("success");
  });

  test("Rename", async () => {
    const request = await bucket.rename("Users", "Contacts");

    expect(request.status).toBe("success");
  });

  test("Drop", async () => {
    const request = await bucket.drop("Contacts");

    expect(request.status).toBe("success");
  });
});

describe("Insert, Get, Remove", () => {
  let id;

  beforeAll(async () => {
    await bucket.create("Users");
  });

  test("Insert", async () => {
    const request = await bucket.insert("Users", {
      username: "yasaricli",
    });

    expect(request.status).toBe("success");
  });

  test("Insert", async () => {
    const request = await bucket.insert("Users", {
      username: "yasaricli",
    });

    expect(request.status).toBe("success");

    id = request.data.id;
  });

  test("Get", async () => {
    const request = await bucket.get("Users", id);

    expect(request.status).toBe("success");
    expect(request.data.username).toBe("yasaricli");
  });

  test("Update", async () => {
    const updateRequest = await bucket.update("Users", id, {
      username: "osman",
    });

    // check updated
    expect(updateRequest.status).toBe("success");

    const getRequest = await bucket.get("Users", id);

    expect(getRequest.status).toBe("success");
    expect(getRequest.data.username).toBe("osman");
  });

  test("Remove", async () => {
    const request = await bucket.remove("Users", id);

    expect(request.status).toBe("success");
  });
});