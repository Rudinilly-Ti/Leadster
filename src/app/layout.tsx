import { Plus_Jakarta_Sans } from 'next/font/google'

const pj = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Leadster</title>
        <meta name="description" content="Leadster" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={pj.className}>{children}</body>
    </html>
  )
}
