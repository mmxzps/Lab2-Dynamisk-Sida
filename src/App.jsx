import { BrowserRouter, Route, Routes,HashRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Jobs from './pages/Jobs'
import Educations from './pages/Educations'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/educations" element={<Educations />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
