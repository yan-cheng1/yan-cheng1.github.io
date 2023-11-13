import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import Layout from '@/layout/index'
import { themeColorObject } from './styles/themeColor'

function App() {
  return (
    <ConfigProvider theme={themeColorObject}>
      <Layout />
    </ConfigProvider>
  )
}

export default App
