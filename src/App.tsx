import { Router, Route, Switch } from 'wouter'
import { HelmetProvider, Helmet } from '@dr.pogodin/react-helmet'
import { Header } from './layout/header'
import { Footer } from './layout/footer'
import HomePage from './pages/home-page'
import AccountingPage from './pages/accounting-page'
import HrPage from './pages/hr-page'
import LaunchPage from './pages/launch-page'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>freee Starter</title>
        <meta
          name="description"
          content="すべてのスモールビジネスを支える統合型経営プラットフォーム"
        />
      </Helmet>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/accounting" component={AccountingPage} />
            <Route path="/hr" component={HrPage} />
            <Route path="/launch" component={LaunchPage} />
            <Route>404 Not Found</Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
