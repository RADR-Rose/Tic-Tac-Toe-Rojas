import './globals.css' 

export const metadata = {
  title: 'Tic-Tac-Toe Game',
  description: 'Play the classic Tic-Tac-Toe game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}