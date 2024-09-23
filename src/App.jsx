import Header from './components/Header'
import Layout from './components/Layout'
import ProgressTracker from './components/ProgressTracker'
import ProgressTab from './components/ProgressTab'

import './App.css'

function App() {

  return (
    <Layout>
      <Header />
      <section id='progress-section'>
        <ProgressTracker />
        <ProgressTab />
      </section>
    </Layout>
  )
}

export default App
