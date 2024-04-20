// api.js

const BASE_URL = "http://127.0.0.1:5000";

export const fetchContacts = async () => {
    const response = await fetch(`${BASE_URL}/contacts`);
    const data = await response.json();
    return data.contacts;
};

export const createContact = async (contactData) => {
    const response = await fetch(`${BASE_URL}/create_contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
    });
    return response.json();
};

export const updateContact = async (userId, contactData) => {
    const response = await fetch(`${BASE_URL}/update_contact/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
    });
    return response.json();
};

export const deleteContact = async (userId) => {
    const response = await fetch(`${BASE_URL}/delete_contact/${userId}`, {
        method: "DELETE"
    });
    return response.json();
};
