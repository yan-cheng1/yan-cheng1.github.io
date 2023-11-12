import React, { FC } from 'react'
import { UserOutlined } from '@ant-design/icons'

import style from './sider.module.scss'

const Sider: FC = () => {
  return (
    <div className={style.sider_bar}>
      <div className="user_avator"></div>
      <div>
        <h4>关于我</h4>
        <p>YC</p>
        <p>前端工程师</p>
      </div>
    </div>
  )
}

export default Sider
