"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <header>
        <h2>Playful</h2>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
        </nav>
        <Button>Get Started</Button>
    </header>
  )
}
