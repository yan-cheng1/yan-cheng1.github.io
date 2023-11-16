import React, { useState } from 'react'
import style from './Blog.scss'
import BlogComp from '@/components/blogComp/index'

const Blog = () => {
  const [blogArr, setBlogArr] = useState<any[]>([1, 2, 3, 4])
  return (
    <div className={style.blog_page}>
      {blogArr.map((item) => (
        <BlogComp />
      ))}
    </div>
  )
}
export default Blog
