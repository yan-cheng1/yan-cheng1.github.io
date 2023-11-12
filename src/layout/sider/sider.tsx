import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'

import style from './sider.module.scss'

const Sider: FC = () => {
  return (
    <div className={style.sider_bar}>
      <div className="user_avator"></div>
      <div>
        <h4></h4>
        <Link to="/about">关于我</Link>
      </div>
    </div>
  )
}

export default Sider
