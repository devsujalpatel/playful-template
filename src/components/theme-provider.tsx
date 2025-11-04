"use client"
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes"
import { Children } from "react"

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const { setTheme } = useTheme()
    setTheme("light")
  return (
    <NextThemeProvider>
        {children}
    </NextThemeProvider>
  )
}
