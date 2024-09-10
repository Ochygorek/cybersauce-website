import Paragraph from '@/app/ui/components/paragraph/paragraph'
import Subheading from '@/app/ui/components/subheading/subheading'
import React from 'react'
import styles from './resources.module.scss'
import SourceWidget from '@/app/ui/components/source-widget/sourceWidget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
}

function Resources() {
  return (
    <div className={styles.root}>
      <div className={styles.cont}>
        <h1>Resources</h1>
        <div className={styles.shadow13}></div>
        <div className={styles.shadow14}></div>
      </div>
      <main className={styles.main}>
        <section>
          <article>
            <Subheading>Subheading</Subheading>
            <Paragraph>A text is a passage of words that conveys a set of meanings to the person who is reading it. It’s a body of written work, in various forms and structures, that can be words, phrases and sentences that piece together a passage of written work.</Paragraph>
            <SourceWidget href='/resources' blueT='Stuff' grayT='more stuff' />
            <Paragraph>A text is a passage of words that conveys a set of meanings to the person who is reading it. It’s a body of written work, in various forms and structures, that can be words, phrases and sentences that piece together a passage of written work.</Paragraph>
            <SourceWidget href='/resources' blueT='Stuff' grayT='more stuff' />
          </article>
          <article>
            <Subheading>Subheading</Subheading>
            <Paragraph>A text is a passage of words that conveys a set of meanings to the person who is reading it. It’s a body of written work, in various forms and structures, that can be words, phrases and sentences that piece together a passage of written work.</Paragraph>
            <SourceWidget href='/resources' blueT='Stuff' grayT='more stuff' />
            <Paragraph>A text is a passage of words that conveys a set of meanings to the person who is reading it. It’s a body of written work, in various forms and structures, that can be words, phrases and sentences that piece together a passage of written work.</Paragraph>
            <SourceWidget href='/resources' blueT='Stuff' grayT='more stuff' />
          </article>
        </section>
      </main>
      <div className={styles.end}></div>
    </div>
  )
}

export default Resources