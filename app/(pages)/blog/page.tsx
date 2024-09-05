import React from 'react'
import styles from './blog.module.scss'
// import { blogDisplay } from '@/app/utils/blog/display'
import BlogCard from '@/app/ui/components/blog-card/blogCard'
import { getPost } from '@/app/utils/blog/actions'

async function Blog() {
  const post = await getPost()

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.cont}>
          <h1>Blog</h1>
          <div className={styles.shadow11}></div>
          <div className={styles.shadow12}></div>
        </div>
        <section className={styles.blogs}>
          {post.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default Blog