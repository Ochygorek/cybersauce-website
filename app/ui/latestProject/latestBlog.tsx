import React from 'react'
import styles from './latestProject.module.scss'
import CircleDimmIcon from '../icons/circleDimmIcon'

interface importProps {
  i: number
  title: string
  setModal: any
}

function LatestBlog({i, title, setModal}: importProps) {
  return (
    <div className={styles.cont} onMouseEnter={() => setModal({active: true, index: i})} onMouseLeave={() => setModal({active: false, index: i})}>
      <h2>{title}</h2>
      <CircleDimmIcon />
    </div>
  )
}

export default LatestBlog