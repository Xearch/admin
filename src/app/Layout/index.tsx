'use client'

import { Footer } from '@/src/app/Layout/Footer'
import Header from '@/src/app/Layout/Header'
import classes from '@/src/app/Layout/Layout.module.css'
import { Flex } from '@mantine/core'

import { Navbar } from './Navbar/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={classes.main}>
        <Header />
        <Flex>
          <Navbar />
          <Flex direction="column" px={20} mih="100vh" w="100%">
            {children}
          </Flex>
        </Flex>
        <Footer />
      </div>
    </>
  )
}
