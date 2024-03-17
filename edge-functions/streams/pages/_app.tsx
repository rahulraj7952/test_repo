import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout
      title="Streaming in Edge Functions"
      path="edge-functions/streams"
      description="Learn how to use Streams in Vercel Edge Functions"
    >
      <Component {...pageProps} />
    </Layout>
  )
}
