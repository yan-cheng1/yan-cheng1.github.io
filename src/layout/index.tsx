import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout, Space } from 'antd'

import MineSider from './sider/sider'
import Home from '@/pages/home/Home'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Sider className="headerStyle">
        <MineSider />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Space>
)

export default App
