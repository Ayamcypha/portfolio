'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const variants = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, delay = 0, direction = 'up', className, style, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={style}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={variants[direction]}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

ScrollReveal.displayName = 'ScrollReveal'