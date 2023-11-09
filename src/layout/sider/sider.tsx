import React, { FC } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
import './sider.scss'

const Sider: FC = () => {
  return (
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
    </div>
  )
}

export default Sider
