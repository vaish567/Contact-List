import { Layout, Menu } from 'antd';
import ContactManager from './components/ContactPage/ContactManager';
import ContactList from './components/ContactPage/ContactList'

const { Header, Content } = Layout;

const MainNavigation = () => {
  return (
    <ContactManager>
      {({ contacts }) => (
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Contact List</Menu.Item>
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
