import { AboutMe } from './components/Sections/AboutMe/AboutMe'
import { Banner } from './components/Sections/Banner/Banner'
import { ProjectSection } from './components/Sections/Projects/ProjectsSection'
import { TechSection } from './components/Sections/Technologies/TechnologiesSection'
import { Template } from './components/Template/Template'

function App() {
  return (
    <Template>
      <Banner />
      <AboutMe />
      <TechSection />
      <ProjectSection />
    </Template>
  )
}
export default App
