import React, { useEffect, useRef } from 'react'
import styles from './modal.module.scss'
import Image from 'next/image'
import { blogType } from '@/app/blog/display'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface importProps {
  modal: any
  blogs: blogType[]
}

const scaleAnimation = {
  initial: {scale: 0, x: '-50%', y: '-50%'},
  open: {scale: 1, x: '-50%', y: '-50%', transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
  close: {scale: 0, x: '-50%', y: '-50%', transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

function Modal({modal, blogs}: importProps) {
  const {active, index} = modal
  const target = useRef(null)

  useEffect(() => {
    const moveContainerX = gsap.quickTo(target.current, 'left', {duration: 0.8, ease: 'power3'})
    const moveContainerY = gsap.quickTo(target.current, 'top', {duration: 0.8, ease: 'power3'})

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      moveContainerX(clientX)
      moveContainerY(clientY)
    })
  }, [])

  return (
    <motion.div 
      variants={scaleAnimation}
      initial={'initial'}
      animate={active ? 'open' : 'close'}
      ref={target}
      className={styles.cont}
    >
      <div style={{top: index * -100 + '%'}} className={styles.slider}>
        {
          blogs.map((blog, i) => (
            <div key={i} style={{backgroundColor: blog.color}} className={styles.modal}>
              <Image
                src={`/thumbnails/${blog.thumbnail}`}
                alt={`${blog.title} blog image.`}
                width={300}
                height={0}
              />
            </div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default Modal