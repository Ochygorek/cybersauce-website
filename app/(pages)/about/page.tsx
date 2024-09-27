import React from 'react'
import styles from './about.module.scss'
import Subheading from '@/app/ui/components/subheading/subheading'
import Paragraph from '@/app/ui/components/paragraph/paragraph'
import ImageParallax from '@/app/ui/components/image-parallax/imageParallax'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
}

function About() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.cont}>
            <h1>About</h1>
            <div className={styles.shadow9}></div>
            <div className={styles.shadow10}></div>
          </div>
          <div className={styles.img}>
            <Image 
              src={'/images/about/self/main.png'}
              alt={'The main about image.'}
              width={928}
              height={1114}
            />
            <Image 
              src={'/images/about/self/bg.png'}
              alt={'Background image.'}
              width={768}
              height={407}
              className={styles.bg}
            />
            <div className={styles.shadow21}></div>
            <div className={styles.shadow22}></div>
            <div className={styles.shadow23}></div>
            <div className={styles.cont}>
              <span>C</span>
              <span>y</span>
              <span>b</span>
              <span>e</span>
              <span>r</span>
              <span>S</span>
              <span>a</span>
              <span>u</span>
              <span>c</span>
              <span>e</span>
            </div>
          </div>
        </section>
        <article className={styles.article}>
          <Subheading>Subheading</Subheading>
          <Paragraph>
            A text is a passage of words that conveys a set of meanings to the person who is reading it. Its a body of written work, in various forms and structures, that can be words, phrases and sentences that piece together a passage of written work.
          </Paragraph>
          <Paragraph>
            To put it as simply as possible, it is a group of words. But it can come in many different forms.
          </Paragraph>
          <Paragraph>
            A text can be written materials, such as books, magazines, newspapers, or online content. But it can also be other things, those that we may not associate with standard text. Text could be movies, scripts, paintings, songs, political cartoons, advertisements and maps. If we can look at something with words and sentences, explore it, find layers of meaning in it, and draw information and conclusions from it, youre looking at a text.
          </Paragraph>
        </article>
        <section>
          <ImageParallax imagesArray={['test1.png', 'test2.png', 'test3.png']}/>
        </section>
        <article className={styles.article}>
          <Subheading>Subheading</Subheading>
          <Paragraph>
            A text is a passage of words that conveys a set of meanings to the person who is reading it. Its a body of written work, in various forms and structures, that can be words, phrases and sentences that piece together a passage of written work.
          </Paragraph>
          <Paragraph>
            To put it as simply as possible, it is a group of words. But it can come in many different forms.
          </Paragraph>
          <Paragraph>
            A text can be written materials, such as books, magazines, newspapers, or online content. But it can also be other things, those that we may not associate with standard text. Text could be movies, scripts, paintings, songs, political cartoons, advertisements and maps. If we can look at something with words and sentences, explore it, find layers of meaning in it, and draw information and conclusions from it, youre looking at a text.
          </Paragraph>
        </article>
      </main>
      <div className={styles.end}></div>
    </div>
  )
}

export default About