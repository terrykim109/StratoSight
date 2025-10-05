import './globals.css'

export const metadata = {
  title: 'BioVerse – NASA Space Biology Dashboard',
  description: 'Explore NASA\'s Space Biology Made Simple',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="space-bg">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        {children}
      </body>
    </html>
  )
}