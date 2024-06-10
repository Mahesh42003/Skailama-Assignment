
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProjectHome from './components/ProjectHome'
import Upload from './components/Upload' 

const App=() => (
  <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<ProjectHome/>}/>
    <Route exact path="/upload" element={<Upload/>}/> 
   </Routes> 
  </BrowserRouter> 
)
export default App 