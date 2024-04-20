
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
### Update Contact

- **URL:**  /update_contact/<int:user_id>
- **Method:** : PATCH
- **Description:** : Updates an existing contact.
- **Request Body:** : (Optional)
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
### Delete Contact
- **URL:**  /delete_contact/<int:user_id>
- **Method:** : DELETE
- **Description:** : Deletes an existing contact.
- **Request Body:** : (Optional)

### Backend (Python Flask)

To run the backend, execute the `main.py` file.

### Frontend (React)

The frontend provides a user interface to view, create, update, and delete contacts.

#### Components

- **ContactList:** Displays a list of contacts and allows editing or deleting them.
- **ContactForm:** Form for creating or editing a contact.

To run the frontend, execute the `App.jsx` file.

### Instructions

1. Clone the repository.
2. Run the backend and frontend applications separately.
3. Access the application in your browser.


Backend Setup
```bash
cd backend
python main.py


Frontend Setup
## bash
    ```cd react-frontend
       npm start
