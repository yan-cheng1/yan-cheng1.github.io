import * as React from 'react'
import style from './index.scss'

interface IBlogCompProps {}

const BlogComp: React.FunctionComponent<IBlogCompProps> = (props) => {
  return (
    <div className={style.blog_comp}>
      <h3>title</h3>
      <p>keywords</p>
    </div>
  )
}

export default BlogComp
