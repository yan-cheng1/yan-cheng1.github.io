import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MineSider from './sider/sider'
import Blog from '@/pages/blog/Blog'
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
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  </div>
)

export default Layout
