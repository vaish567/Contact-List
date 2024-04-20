import { useState } from "react";
import { Form, Input, Button } from 'antd';

const ContactForm = ({ existingContact = {}, updateCallback }) => {
    const [firstName, setFirstName] = useState(existingContact.firstName || "");
    const [lastName, setLastName] = useState(existingContact.lastName || "");
    const [email, setEmail] = useState(existingContact.email || "");

    const updating = Object.entries(existingContact).length !== 0;

    const onSubmit = async (values) => {
        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email
        };

        const url = "http://127.0.0.1:5000/" + (updating ? `update_contact/${existingContact.id}` : "create_contact");
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, options);
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json();
            alert(data.message);
        } else {
            updateCallback();
        }
    };

    return (
        <Form
            initialValues={existingContact}
            onFinish={onSubmit}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
        >
            <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    {updating ? "Update" : "Create"}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;
