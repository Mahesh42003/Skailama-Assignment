import {Link} from 'react-router-dom'
import localStorage from 'local-storage'
import './index.css'

const EachProject=(props) => {
    const {Project}=props 
    const {Name}=Project  
    const clickingProject=() => { 
        localStorage.set("Name",Name)
    }
    return(
        <li>
        <Link to="/upload" className="styling-of-each-project" onClick={clickingProject}>
            <div className='flexing-of-each-project'> 
                <div className='background-color-of-each-box'> 
                    <h1>{Name[0]+"P"}</h1>
                </div>   
                <div>
               <h3 className='Projects-heading'>{Name}</h3> 
               <h4>2 Episodes</h4> 
               </div>  
            </div> 
        </Link>
        </li>
    )
}  
export default EachProject
