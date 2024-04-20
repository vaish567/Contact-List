# Contact List Application

This is a simple application that allows users to manage contacts. It consists of a backend built with Python Flask and a frontend built with React.

## Backend (Python Flask)

The backend provides a RESTful API to perform CRUD operations on contacts. Here are the endpoints:

### Get Contacts

- **URL:** `/contacts`
- **Method:** GET
- **Description:** Retrieves a list of all contacts.

### Create Contact

- **URL:** `/create_contact`
- **Method:** POST
- **Description:** Creates a new contact.
- **Request Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
