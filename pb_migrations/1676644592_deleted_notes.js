migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ipkqzf7yfzh2ssr");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ipkqzf7yfzh2ssr",
    "created": "2023-02-17 14:35:45.870Z",
    "updated": "2023-02-17 14:35:45.870Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "efbc6bua",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pi25jd8w",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
