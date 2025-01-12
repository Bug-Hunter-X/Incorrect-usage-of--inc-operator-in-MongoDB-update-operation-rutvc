# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The bug arises from providing a string value instead of a number to the `$inc` operator, leading to incorrect updates.

## Bug Description
The `$inc` operator is used to increment a numerical field in a MongoDB document.  However, if a string is passed as the increment value, the update operation will fail to increment the field correctly.

## Solution
The solution involves ensuring that the value passed to the `$inc` operator is a number.  This will correct the update behavior, allowing for accurate increment of the specified field. 

## How to Reproduce the Bug
1. Create a MongoDB collection with a document containing a numerical field.
2. Attempt to update the document using the `$inc` operator with a string value.
3. Observe that the field is not correctly incremented.
