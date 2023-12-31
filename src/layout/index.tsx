import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MineSider from './sider/sider'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'

import style from './index.module.scss'

const Layout: React.FC = () => (
  <div className={style.layout_page}>
    <div className={style.layout_sider}>
      <MineSider />
    </div>
    <div className={style.layout_content}>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </div>
)

export default Layout
