import { Component } from "react" 
import { CiSettings,CiHome,CiCirclePlus} from "react-icons/ci";
import {v4 as uuidv4} from 'uuid'
import { IoIosNotificationsOutline } from "react-icons/io";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import EachProject from '../EachProject'
import './index.css' 

class ProjectHome extends Component{
    state={ProjectName:"",errorMessage:"",ProjectsList:[]} 
    
    creatingProject=() => { 
        const {ProjectName}=this.state
        const eachProject={
            id:uuidv4(), 
            Name:ProjectName
        }
        if(ProjectName.length === 0){
            this.setState({errorMessage:"Project Name Can't be empty"})
        } 
        else{
            this.setState((prevState => ({
                ProjectsList:[eachProject,...prevState.ProjectsList]
            })))
        }
    }  

    typingProjectName=(Event) => {
        this.setState({ProjectName:Event.target.value})
    } 

    

    render(){ 
        const {errorMessage,ProjectsList}=this.state 

        if(ProjectsList.length > 0){
            return(
                <div>
                     <div className="flexing-of-logo-and-icons">
            <div className="logo-and-logo-heading">
                <img src="https://i.im.ge/2024/06/07/Kygr3p.directrightlamalogo.png" alt="lama-logo"/>
                <h1>LAMA</h1>
                </div> 
                <div>
                <CiSettings className="settings-icon-size"/> 
                <IoIosNotificationsOutline className="notifiction-icon-size"/>
            </div>
           </div> 
           <button className="left-margin-back-to-home-button">
                <CiHome/> Back to Home
             </button>  
             <div className="Projects-heading-flexing">
                <h1 className="Projects-heading">Projects</h1>
                <Popup modal trigger={
                <button className="create-project-button">
                    <CiCirclePlus/> Create New Project
                </button>
                }>
                {cancel => ( 
                    <> 
                <h1>Create Project</h1>  
                <div className="flexing-of-popup">
                    <label htmlFor="project-name">Enter Project Name:</label> 
                    <input type="text" id="project-name" placeholder="Type here" onChange={this.typingProjectName}/> 
                    <p>{errorMessage}</p>
                    <div className="margin-top-popup-buttons">
                     <button className="cancel-button" onClick={() => cancel()}>Cancel</button>
                     <button className="create-button" onClick={this.creatingProject}>Create</button>
                    </div> 
                </div>
                </>
                )}
             </Popup>  
             </div>
             <ul className="width-of-unordered-list">
                {
                    ProjectsList.map(each => <EachProject key={each.id} Project={each} />)
                }
             </ul>
                </div>
            )
        }
        
        return(
           <div>
            <div className="flexing-of-logo-and-icons">
            <div className="logo-and-logo-heading">
            <img src="https://i.im.ge/2024/06/07/Kygr3p.directrightlamalogo.png" alt="lama-logo"/>
            <h1>LAMA</h1>
            </div> 
            <div>
                <CiSettings className="settings-icon-size"/> 
                <IoIosNotificationsOutline className="notifiction-icon-size"/>
            </div>
           </div> 
             <button className="left-margin-back-to-home-button">
                <CiHome/> Back to Home
             </button> 
             <div className="flexing-of-project">
                <h1 className="colour-of-main-heading">Create a New Project</h1> 
                <img src="https://i.im.ge/2024/06/07/KyHLrX.Group-16meeting.png" alt="meeting"/> 
                <p className="align-items-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in</p> 
                <Popup modal trigger={
                <button className="create-project-button">
                    <CiCirclePlus/> Create New Project
                </button>
                }>
                {cancel => ( 
                    <>
                <h1>Create Project</h1>  
                <div className="flexing-of-popup">
                    <label htmlFor="project-name">Enter Project Name:</label> 
                    <input type="text" id="project-name" placeholder="Type here" onChange={this.typingProjectName}/> 
                    <p>{errorMessage}</p>
                    <div className="margin-top-popup-buttons">
                     <button className="cancel-button" onClick={() => cancel()}>Cancel</button>
                     <button className="create-button" onClick={this.creatingProject}>Create</button>
                    </div> 
                </div>
                </>
                )}
             </Popup> 
             </div> 
           </div> 
        )
    }
}
export default ProjectHome