import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
