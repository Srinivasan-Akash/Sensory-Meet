import '@/styles/globals.css'
import { SocketProvider } from './context/SocketProvider'

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  )
}
