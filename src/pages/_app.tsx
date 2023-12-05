import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

import Image from 'next/image'
import Link from 'next/link'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      // mode="payment"
      cartMode="checkout-session"
      stripe={String(process.env.STRIPE_PUBLIC_KEY)}
      // successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      // cancelUrl={String(process.env.NEXT_URL)}
      currency="BRL"
      shouldPersist
    >
      <Container>
        <Header>
          <Link href={'/'}>
            <Image src={logoImg} alt="" />
          </Link>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
