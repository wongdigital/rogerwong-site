'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system"
      enableSystem
      storageKey="theme"
      themes={['light', 'dark', 'system']}
    >
      {children}
    </ThemeProvider>
  )
}
