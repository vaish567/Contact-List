import { useState } from "react";
import { Form, Input, Button } from 'antd';
import { login, logout } from "../../config/api";


const LoginForm = ({ onSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async () => {
        try {
            await login(username, password);
            onSuccess();
        } catch (error) {
            alert("Login failed: Invalid username or password");
        }
    };

    return (
        <Form onFinish={onSubmit}>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Login</Button>
            </Form.Item>
        </Form>
    );
};

const LogoutButton = ({ onLogout }) => {
    const handleLogout = async () => {
        await logout();
        onLogout();
    };

    return (
        <Button onClick={handleLogout}>Logout</Button>
    );
};

export { LoginForm, LogoutButton };
