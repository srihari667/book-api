# book-api
Node.Js Backend developer challenge


Book Management API
A simple RESTful API for managing books using Node.js and MongoDB.

API Endpoints and Usage
1. Create a new book
URL: /books
Method: POST
Request Body:

```
{
  "title": "Book Title",
  "author": "Author Name",
  "summary": "Book Summary"
}

```

Response: The newly created book object.

2. Get a list of all books
URL: /books
Method: GET
Response: An array of book objects.

3. Get details of a specific book by its ID
URL: /books/:id
Method: GET
Response: The book object with the specified id.


4. Update a book's details
URL: /books/:id
Method: PUT
Request Body:

6. Delete a book
URL: /books/:id
Method: DELETE
Response: A success message.


Local Setup
To run this application locally, follow these steps:

1. Clone the repository:

``````
function test() {
  console.log("notice the blank line before this function?");
}
``````

2. Install dependencies:

```
npm install
```

3.Set up MongoDB:

You can either set up a local MongoDB instance or use a cloud solution like MongoDB Atlas.
Update the MongoDB connection string in app.js to point to your MongoDB instance:

```
mongoose.connect('YOUR_CONNECTION_STRING', { useNewUrlParser: true });

```

4.Start the server:

```
node app.js

```

API will be running at http://localhost:3000. now use it to manage books.

Assumptions and Decisions
MongoDB is used as the database for storing book data.
This API is designed to be a simple example for book management and may not cover all possible edge cases or advanced features.
Validation, authentication, and error handling are not extensively covered in this example and should be added for a production-ready application.
The API is stateless and does not use sessions or cookies for authentication.
Proper documentation and testing should be added for a production application.
