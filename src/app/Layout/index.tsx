'use client'

import { Footer } from '@/src/app/Layout/Footer'
import Header from '@/src/app/Layout/Header'
import classes from '@/src/app/Layout/Layout.module.css'
import { Flex } from '@mantine/core'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={classes.main}>
        <Header />

        <Flex direction="column" p={20} mih="100vh">
          {children}
        </Flex>
        <Footer />
      </div>
    </>
  )
}
