import { keyframes } from '@stitches/react'
import { styled } from './index'

const pulse = keyframes({
  '0%, 100%': {
    opacity: 0.5,
  },
  '50%': {
    opacity: 1,
  },
})

export const LoadContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
  animation: `${pulse} 1.3s ease-in-out infinite`,
})

export const ImageLoad = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: '$gray300',
  opacity: 0.1,
  borderRadius: 8,
})

export const ProductLoad = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    width: 576,
    background: '$gray300',
    opacity: 0.1,
    borderRadius: 8,
  },

  span: {
    marginTop: '1rem',
    width: 450,
    height: 60,
    background: '$gray300',
    opacity: 0.1,
    borderRadius: 8,
  },

  p: {
    marginTop: '2.5rem',
    width: 576,
    height: 120,
    background: '$gray300',
    opacity: 0.1,
    borderRadius: 8,
  },

  button: {
    marginTop: 'auto',
    width: 576,
    height: 80,
    background: '$gray300',
    opacity: 0.1,
    border: 0,
    borderRadius: 8,
  },
})
