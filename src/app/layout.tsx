import './globals.css'
import Layout from './components/layout/layout';

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
      </body>
    </html>
  )

}
