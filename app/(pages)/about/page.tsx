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
              src={'/images/about/self/main copy.png'}
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
          <div className={styles.divider}></div>
          <Paragraph>
            Hey there, I’m Jax Lawson, but in the hacker world, I go by Jax—straightforward, just like my approach to security. Growing up in California’s tech capital, I was always drawn to the world behind the screen. It started with curiosity, but it’s become my life’s passion: understanding and mastering the digital landscape.
          </Paragraph>
        </article>
        <article>
          <Subheading>My Journey</Subheading>
          <Paragraph>
          Being raised in the shadow of Silicon Valley, I was surrounded by innovation from an early age. I built my first computer at 12 and cracked my first algorithm a year later. That’s when I realized I had a unique talent for finding loopholes—whether in code or in systems. Fast forward a decade, and I’ve turned that obsession into a career, working as a penetration tester, ethical hacker, and security architect for startups and established companies alike.
          </Paragraph>
        </article>
        <section>
          {/* 
            images should be in the /public/images/about folder

            UNCOMMENT the ImageParallax component when ready for production
          */}

          <ImageParallax imagesArray={['i1.png', 'i2.png', 'i3.png']}/>
        </section>
        <article>
          <Subheading>What I Do</Subheading>
          <Paragraph>
            To me, hacking isn’t about breaking things—it’s about discovering how things work. I specialize in penetration testing, cybersecurity consulting, and vulnerability research. In short, I find the holes in digital systems before anyone else does. Whether it’s building secure infrastructures from the ground up or fortifying existing ones, I’m all about creating bulletproof environments for my clients.
          </Paragraph>
          <Paragraph>
            I’ve worked on everything from protecting sensitive data to securing cryptocurrency exchanges, and I’ve even been known to help the occasional non-tech-savvy startup from falling prey to cyber threats. My goal? To stay one step ahead of the digital chaos and make the internet a safer place for the good guys.
          </Paragraph>
        </article>
        <article>
          <Subheading>Life Beyond the Screen</Subheading>
          <Paragraph>
            When I’m not behind a screen, I’m out chasing waves or soaking in the Cali sun. Living so close to the Pacific, I’ve found that the perfect way to clear my head after a marathon coding session is to hit the surf. Surfing and hacking have a lot in common—it’s all about timing, flow, and catching the right wave.
          </Paragraph>
        </article>
        <article>
          <Subheading>Why I Hack</Subheading>
          <Paragraph>
            Hacking isn’t just a job—it’s a mindset. Every system has a story to tell, and I love discovering what’s hidden beneath the surface. For me, it’s about peeling back the layers of code to find the truth inside. I’m driven by the challenge of outsmarting threats before they strike, making the web a little more secure with every test and patch.
          </Paragraph>
          <Paragraph>
            So, if you need someone who can think outside the firewall, you’ve come to the right place. Let’s work together to keep your digital world safe.
          </Paragraph>
        </article>
        <article>
          <Paragraph>
            Stay curious,
          </Paragraph>
          <Paragraph>
            Jax ’’Jax’’ Lawson
          </Paragraph>
          <Paragraph>
            Security Architect, Penetration Tester, Digital Adventurer
          </Paragraph>
        </article>
      </main>
      <div className={styles.end}></div>
    </div>
  )
}

export default About