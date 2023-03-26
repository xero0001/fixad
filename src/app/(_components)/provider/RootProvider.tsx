import ReactQueryClientProvider from './elements/ReactQueryClientProvider'
import RecoilRootProvider from './elements/RecoilRootProvider'

export default function RootProvider({ children }) {
  return (
    <RecoilRootProvider>
      <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
    </RecoilRootProvider>
  )
}
