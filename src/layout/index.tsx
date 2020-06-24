
import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { history } from 'umi';

export default (props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" onClick={() => history.push('/test1')}>个人</Menu.Item>
          <Menu.Item key="2" onClick={() => history.push('/test2')}>群体</Menu.Item>
          <Menu.Item key="3">其他</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="基础信息">
              <Menu.Item key="1" onClick={() => history.push('/person-time-line-1')}>时间轴</Menu.Item>
              <Menu.Item key="2" onClick={() => history.push('/test1')}>test1</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="看过的书">
              <Menu.Item key="5" onClick={() => history.push('/read-books-1')}>看过的书-评分</Menu.Item>
              <Menu.Item key="6" onClick={() => history.push('/read-books-2')}>看过的书-时间</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="作家">
              <Menu.Item key="9" onClick={() => history.push('/writer-time-line-1')}>作家-创作年龄</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            { props.children }
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}