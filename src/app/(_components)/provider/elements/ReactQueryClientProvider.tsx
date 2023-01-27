'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
      refetchOnWindowFocus: true,
    },
  },
})

export default function ReactQueryClientProvider({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
