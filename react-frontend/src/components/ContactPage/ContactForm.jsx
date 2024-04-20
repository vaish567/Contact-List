import { useState } from "react";
import { Form, Input, Button } from 'antd';
import { createContact, updateContact } from "../../config/api";

const ContactForm = ({ existingContact = {}, updateCallback }) => {
    const [form] = Form.useForm(); // Use Form hooks
    const [updating, setUpdating] = useState(Object.entries(existingContact).length !== 0);

    const onFinish = async (values) => {
        try {
            if (updating) {
                await updateContact(existingContact.id, values);
            } else {
                await createContact(values);
            }
            updateCallback(); // Update contacts after submission
        } catch (error) {
            console.error("Error:", error);
            alert("Error occurred while submitting the form");
        }
    };

    return (
        <Form
            form={form}
            initialValues={existingContact}
            onFinish={onFinish}
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
