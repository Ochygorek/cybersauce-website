'use client'

import { useTransform, motion } from 'framer-motion';
import Image from 'next/image'
import React, { ReactNode } from 'react'
import CircleIcon from './icons/circleIcon'
import SquareIcon from './icons/squareIcon';
import HexagonIcon from './icons/hexagonIcon';

export const Slide = (props: any) => {
  const direction = props.direction === 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])

  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src}>
        {props.children}
      </Phrase>
      <Phrase src={props.src}>
        {props.children}
      </Phrase>
      <Phrase src={props.src}>
        {props.children}
      </Phrase>
      <Phrase src={props.src}>
        {props.children}
      </Phrase>
    </motion.div>
  )
}

const Phrase = ({src, children}: {src: string, children: ReactNode}) => {
  return (
    <div className={'px-5 flex gap-5 items-center justify-center'}>
      <p className='text-[8rem]'>{children}</p>
      <span className="relative h-full flex items-center px-[4.75rem]">
          {src === 'circle' && 
            <CircleIcon />
          }
          {src === 'square' && 
            <SquareIcon />
          }
          {src === 'hexagon' && 
            <HexagonIcon />
          }
      </span>
    </div>
  )
}

