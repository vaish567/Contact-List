const BASE_URL = "http://127.0.0.1:5000";

export const fetchContacts = async () => {
    const response = await fetch(`${BASE_URL}/contacts`);
    const data = await response.json();
    return data.contacts;
};

export const createContact = async (contactData) => {
    try {
        const response = await fetch(`${BASE_URL}/create_contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create contact');
        }
        
        return response.json();
    } catch (error) {
        console.error('Error creating contact:', error);
        throw error;
    }
};

export const updateContact = async (userId, contactData) => {
    try {
        const response = await fetch(`${BASE_URL}/update_contact/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update contact');
        }
        
        return response.json();
    } catch (error) {
        console.error('Error updating contact:', error);
        throw error;
    }
};

export const deleteContact = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/delete_contact/${userId}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete contact');
        }
        
        return response.json();
    } catch (error) {
        console.error('Error deleting contact:', error);
        throw error;
    }
};

// Login API
export const login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
        throw new Error("Invalid username or password");
    }
};

// Logout API
export const logout = async () => {
    await fetch(`${BASE_URL}/logout`, {
        method: "GET",
        credentials: 'include'
    });
};
