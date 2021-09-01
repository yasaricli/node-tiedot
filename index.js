const { curly } = require("node-libcurl");

class Tiedot {
  constructor(url) {
    this.SERVER_URL = url;

    this.STATUS_MAP = {
      200: "success",
      201: "success",
    };

    this.version().catch((err) => {
      console.log(`
Server: ${url}
Error: ${err.message}
      `);
    });
  }

  url(endpoint) {
    return `${this.SERVER_URL}${endpoint}`;
  }

  returnJSON(statusCode, data) {
    return {
      status: this.STATUS_MAP[statusCode] || "error",
      data,
    };
  }

  async version() {
    const { statusCode, data } = await curly.get(this.url(`/version`));

    return this.returnJSON(statusCode, {
      version: data,
    });
  }

  async create(name) {
    const { statusCode, data } = await curly.get(
      this.url(`/create?col=${name}`)
    );

    return this.returnJSON(statusCode, {
      collection: name,
      message: data,
    });
  }

  async rename(oldName, newName) {
    const { statusCode, data } = await curly.get(
      this.url(`/rename?old=${oldName}&new=${newName}`)
    );

    return this.returnJSON(statusCode, {
      oldName,
      newName,
      message: data,
    });
  }

  async drop(name) {
    const { statusCode, data } = await curly.get(this.url(`/drop?col=${name}`));

    return this.returnJSON(statusCode, {
      collection: name,
    });
  }

  async insert(name, doc) {
    const obj = JSON.stringify(doc || {});
    const { statusCode, data } = await curly.get(
      this.url(`/insert?col=${name}&doc=${obj}`)
    );

    return this.returnJSON(statusCode, {
      id: data,
    });
  }

  async update(name, id, doc) {
    const obj = JSON.stringify(doc || {});
    const { statusCode, data } = await curly.get(
      this.url(`/update?col=${name}&id=${id}&doc=${obj}`)
    );

    return this.returnJSON(statusCode, doc);
  }

  async get(col, id) {
    const { statusCode, data } = await curly.get(
      this.url(`/get?col=${col}&id=${id}`)
    );

    return this.returnJSON(statusCode, data);
  }

  async remove(col, id) {
    const { statusCode, data } = await curly.get(
      this.url(`/delete?col=${col}&id=${id}`)
    );

    return this.returnJSON(statusCode, {
      id,
    });
  }
}

module.exports = Tiedot;
