import { Layout, Menu } from 'antd';

import ContactManager from './components/ContactPage/ContactManager';
import ContactList from './components/ContactPage/ContactList'
import { LoginForm, LogoutButton } from './components/ContactPage/LoginForm';

const { Header, Content } = Layout;

const MainNavigation = ({ isLoggedIn, setLoggedIn }) => {
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <ContactManager>
      {({ contacts }) => (
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Contact List</Menu.Item>
              {isLoggedIn ? (
                <Menu.Item key="2" style={{ float: 'right' }}>
                  <LogoutButton onLogout={handleLogout} />
                </Menu.Item>
              ) : (
                <Menu.Item key="2" style={{ float: 'right' }}>
                  <LoginForm onSuccess={handleLoginSuccess} />
                </Menu.Item>
              )}
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <ContactList contacts={contacts} />
            </div>
          </Content>
        </Layout>
      )}
    </ContactManager>
  );
};

export default MainNavigation;
