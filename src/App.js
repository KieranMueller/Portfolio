import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Resume from './components/Resume'

// ideas/stories
// completely fix mobile layout (remove hover effects etc, add moving or changing background?)
// Add light or dark toggler.
// add more content, projects, videos etc, pictures
// add a little game or demo of something, add page just for demos?

function App() {
    return (
        <Router>
            <picture>
                <source media='(min-width: 1000px)' srcSet='minneapolis.jpg' />
                <source media='(min-width: 0px)' srcSet='minneapolis3.jpg' />
                <img
                    className='background-image'
                    src='minneapolis.jpg'
                    alt='the city of minneapolis'
                />
            </picture>
            <Nav />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/projects' Component={Projects} />
                <Route path='/contact' Component={Contact} />
                <Route path='/resume' Component={Resume} />
            </Routes>
        </Router>
    )
}

export default App
