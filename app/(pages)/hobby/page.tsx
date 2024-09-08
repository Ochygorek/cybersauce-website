'use client'

import React, { useState } from 'react'
import styles from './hobby.module.scss'
import { hobbyData } from '@/app/utils/hobby/content'

function Hobby() {
  const [model, setModel] = useState(false)
  const [temp, setTemp] = useState('')
  const [num, setNum] = useState(0)

  const handleClickOpen = (src: string, num: number) => {
    setModel(true)
    setTemp(src)
    setNum(num)
  }

  const handleClickClose = () => {
    setModel(false)
  }

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.cont}>
          <h1>Hobby</h1>
          <div className={styles.shadow15}></div>
          <div className={styles.shadow16}></div>
        </div>
        <section className={styles.gallery}>
          <div className={model ? `${styles.model} ${styles.opne}` : `${styles.model}` } onClick={() => handleClickClose()}>
            <img src={`/images/about/${temp}`}/>
            <p>{hobbyData[num]?.alt || 'No caption available'}</p>
          </div>
          {hobbyData.map((data, i) => (
            <div key={i} className={styles.image} onClick={() => handleClickOpen(data.src, i)}>
              <img
                src={`/images/about/${data.src}`}
                alt={data.alt}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Hobby