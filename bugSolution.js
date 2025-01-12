```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("650a79895a6a911e4a123456")}, {"$inc": {"count": 10}});
```