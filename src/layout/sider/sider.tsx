import React, { FC } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
import style from './sider.scss'

const Sider: FC = () => {
  return (
    <div className={style.sider_bar}>
      <Avatar size={64} icon={<UserOutlined />} />
      <div className={style.user_name}>颜成</div>
    </div>
  )
}

export default Sider
