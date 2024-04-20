import { useState, useEffect } from "react";
import { fetchContacts } from "../../config/api";


const ContactManager = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const contactsData = await fetchContacts();
            setContacts(contactsData);
        };
        fetchData();
    }, []);

    const updateContacts = async () => {
        const contactsData = await fetchContacts();
        setContacts(contactsData);
    };

    return children({ contacts, updateContacts });
};

export default ContactManager;
