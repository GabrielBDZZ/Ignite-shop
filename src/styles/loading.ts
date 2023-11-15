import { styled } from './index'

export const LoadContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageLoad = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: '$gray800',
  borderRadius: 8,
  //   position: 'relative',
  //   overflow: 'hidden',

  //   '&::after': {
  //     content: '',
  //     position: 'absolute',
  //     top: 0,
  //     right: 0,
  //     bottom: 0,
  //     left: 0,
  //     background: 'linear-gradient(90deg, $gray600 0%, $gray800 15%)',
  //     animation: 'shimmer 1s linear infinite',
  //   },

  //   '@keyframes shimmer': {
  //     '80%': {
  //       transform: 'translateX(100%)',
  //     },
  //   },
})

export const ProductLoad = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    width: 576,
    backgroundColor: '$gray800',
    color: '$gray800',
    borderRadius: 8,
  },

  span: {
    marginTop: '1rem',
    width: 450,
    height: 60,
    backgroundColor: '$gray800',
    color: '$gray800',
    borderRadius: 8,
  },

  p: {
    marginTop: '2.5rem',
    width: 576,
    height: 120,
    backgroundColor: '$gray800',
    color: '$gray800',
    borderRadius: 8,
  },

  button: {
    marginTop: 'auto',
    width: 576,
    height: 80,
    backgroundColor: '$gray800',
    color: '$gray800',
    border: 0,
    borderRadius: 8,
  },
})
