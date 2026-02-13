import { HelmetProvider, Helmet } from '@dr.pogodin/react-helmet'
import { Footer } from './layout/footer'
import HomePage from './pages/home-page'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>ACME Design System</title>
        <meta
          name="description"
          content="ACME Design System"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <main>
        <HomePage />
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default App
