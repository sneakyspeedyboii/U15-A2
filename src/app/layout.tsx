import './globals.css'
import Layout from './components/layout/layout';
import OnLoad from './components/layout/on_load_note/onload';

import Script from 'next/script';

export const metadata = {
  title: 'Hot Beans',
  description: 'good ol company website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
        <OnLoad />
        <Script async src="https://aly.felixklg.dev/VwDrVUy9RFqbFd6" data-website-id="68070bc2-d1c7-4d76-a738-51b7fd540403"></Script>
      </body>
    </html>
  )

}
