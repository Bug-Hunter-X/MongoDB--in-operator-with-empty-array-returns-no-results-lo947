```javascript
function findDocuments(criteria) {
  const { field, values } = criteria;
  if (values === null || values.length === 0) {
    // Handle empty array - return all documents
    return db.collection.find({}); 
  } else {
    // Handle non-empty array - use $in operator
    return db.collection.find({ field: { $in: values } });
  }
}

// Example usage:
const criteria1 = { field: "fieldName", values: [] };
const criteria2 = { field: "fieldName", values: ["value1", "value2"] };

const result1 = findDocuments(criteria1); // Returns all documents
const result2 = findDocuments(criteria2); // Returns documents where fieldName is "value1" or "value2"
```