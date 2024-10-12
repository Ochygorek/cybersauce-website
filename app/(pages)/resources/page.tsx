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
            <div className={styles.divider}></div>
            <Paragraph>
            Welcome to my curated list of tools, guides, and articles to help you navigate the digital landscape. Whether you’re just getting started or you’re a seasoned pro, these resources will help you stay ahead of the game.
            </Paragraph>
          </article>
          <article>
            <Subheading>OWASP</Subheading>
            <Paragraph>
              A must-read guide on the most critical security risks in web applications, straight from the Open Web Application Security Project (OWASP).
            </Paragraph>
            <SourceWidget href='https://owasp.org/' blueT='Owasp' grayT='Web security' target='_blank' />
          </article>
          <article>
            <Subheading>Kali Linux</Subheading>
            <Paragraph>
              If you’re serious about ethical hacking, Kali Linux is a powerful and essential tool for penetration testing. Learn more about it here.
            </Paragraph>
            <SourceWidget href='https://www.kali.org/' blueT='Kali' grayT='Ethical hacking ' target='_blank' />
          </article>
          <article>
            <Subheading>Have I Been Pwned</Subheading>
            <Paragraph>
              Find out if your email or personal information has been exposed in a data breach with this easy-to-use tool.
            </Paragraph>
            <SourceWidget href='https://haveibeenpwned.com/' blueT='Have I Been Pwned' grayT='Data breach ' target='_blank' />
          </article>
          <article>
            <Subheading>Cybrary</Subheading>
            <Paragraph>
              Access free cybersecurity courses and training on topics ranging from network security to ethical hacking.
            </Paragraph>
            <SourceWidget href='https://www.cybrary.it/' blueT='Cybrary' grayT='Cybersecurity training  ' target='_blank' />
          </article>
        </section>
      </main>
      <div className={styles.end}></div>
    </div>
  )
}

export default Resources