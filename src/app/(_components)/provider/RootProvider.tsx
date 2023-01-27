import { ThemeProvider } from 'next-themes'
import ReactQueryClientProvider from './elements/ReactQueryClientProvider'
import RecoilRootProvider from './elements/RecoilRootProvider'

export default function RootProvider({ children }) {
  return (
    <ThemeProvider>
      <RecoilRootProvider>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </RecoilRootProvider>
    </ThemeProvider>
  )
}
