import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header Header='This is my react project' />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  )
}

export default App
