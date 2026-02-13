import { HelmetProvider, Helmet } from '@dr.pogodin/react-helmet'
import { Footer } from './layout/footer'
import HomePage from './pages/home-page'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>freee Design Philosophy</title>
        <meta
          name="description"
          content="freeeのデザイン哲学"
        />
      </Helmet>
      <main>
        <HomePage />
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default App
