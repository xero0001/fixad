'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@client/shared'

export default function ReactQueryClientProvider({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
