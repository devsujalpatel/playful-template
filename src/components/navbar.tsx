"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <header>
        <Link href="/">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
         <h2>Playful</h2>
        </Link>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
        </nav>
        <Button>Get Started</Button>
    </header>
  )
}
