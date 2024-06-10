import {Component} from 'react' 
import localStorage from 'local-storage'
import { CiSettings,CiHome} from 'react-icons/ci'
import { FaCaretDown } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TiPencil } from "react-icons/ti";
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup' 
import 'reactjs-popup/dist/index.css'
import EachUpload from '../EachUpload'
import './index.css'

const chatBotSizes=[{
    id:1,
    size:"Small (48 x 48)px"
},
{
    id:2,
    size:"Medium (96 x 96)px"
},
{
    id:3,
    size:"Large (150 x 150)px"
}]

const ScreenPositions=[{
    id:1,
    position:"Bottom Right"
},
{
    id:2,
    position:"Bottom Left"
},
{
    id:3,
    position:"Top Right"
},
{
    id:4,
    position:"Top Left"
}] 

class Upload extends Component{ 
    state={videoDescription:"",videoName:"",totalContent:[],pathName:"Upload",pathHeading:"Upload",presentDescription:"",EditMode:false,NewDescription:"",trans:"Projects",Active:"General"} 

    Name=(Event) => {
        this.setState({
            videoName:Event.target.value
        })
    }

    description=(Event) => {
        this.setState({videoDescription:Event.target.value})
    }

    editingDescription=(fileName) => {
        const {totalContent}=this.state
        const filteringDescription=totalContent.filter(each => each.id === fileName.id) 
        this.setState({presentDescription:filteringDescription[0].des,pathName:"TransScript",pathHeading:"Edit Transcript"})
    }
   
    saving=() => {
        const {videoDescription,videoName}=this.state
        const saved={
            id:uuidv4(),
            name:videoName,
            des:videoDescription
        }
        this.setState((prevState) => ({
            totalContent:[saved,...prevState.totalContent],
            videoDescription:"",
            videoName:"" 
        }))
    }  
   
    clickingEditModeButton=() =>{
        this.setState({EditMode:true})
    } 

    changingDescription=(Event) => {
        this.setState({NewDescription:Event.target.value}) 
       
    }  
   
    projectfolder=() => {
        this.setState({trans:"Projects",pathHeading:"Upload",pathName:"Upload"})
    }

    widgetConfig=() => {
        this.setState({trans:"Widget-Configuration",pathHeading:"Widget-Configuration",pathName:"Widget-Configuration"})
    } 
  
    clickingDisplay=() =>{
        this.setState({Active:"Display"})
    } 

    clickingGeneral=() =>{
        this.setState({Active:"General"})
    }
    
    clickingSettings=() => {
        this.setState({trans:"Settings",pathName:"Settings",pathHeading:"Account Settings"})
    }

    render(){ 
        const getItem=localStorage.get("Name") 
        const {totalContent,pathName,pathHeading,presentDescription,EditMode,trans,Active} =this.state 
        if(pathName === "Settings"){
            return(
                <div>
                <div className='flexing-uploading'>
                <div className="Navbar-section">
                <div className="logo-and-logo-heading">
                <img src="https://i.im.ge/2024/06/07/Kygr3p.directrightlamalogo.png" alt="lama-logo"/>
                <h1>LAMA</h1>
                </div>  
                <h3>Podcast Upload Flow</h3> 
                <nav>
                    <h4 className={trans === "Projects"?"background-color-pro":""} onClick={this.projectfolder}>1.Projects</h4> 
                    <h4 className={trans === "Widget-Configuration"?"background-color-pro":""} onClick={this.widgetConfig}>2.Widgets Configuration</h4> 
                    <h4>3.Deployment</h4>  
                    <h4>4.Pricing</h4>
                </nav> 
                <hr/> 
                <div className='margin-top-navbar'>
                    <hr/>  
                    <p onClick={this.clickingSettings} className={trans === "Settings" ? "background-color-pro":""}><CiSettings/> Settings</p>
                </div>
                </div>  
                <div>
                <div className='flex-of-upload'>
                    <h6 className='adress-of-project-color'><CiHome /><span className='project-color'>/{getItem}/</span>{pathHeading}</h6>
                    <div className='flexing-of-up'>
                    <FaCaretDown/> EN
                    <img src="https://i.im.ge/2024/06/09/KCZR5h.Ellipse-2country-logo.png" alt="country-logo" className='country-logo-size'/> <IoIosNotificationsOutline className='Notification-size'/>
                </div> 
                
                </div> 
                <h1 className='adress-of-project-color'>{pathHeading}</h1>
                <div className='flex-of-upload'>
                 <img src="https://i.im.ge/2024/06/10/KE6pAW.WhatsApp-Image-2024-06-10-at-11-14-41-AM.jpeg" alt="user" className='size-of-user'/>
                 <div>
                    <h2>User Name</h2> 
                    <div className='size-of-username'>
                        <p>Mahi123</p>
                    </div> 
                 </div> 
                 <div>
                    <h2>Email</h2> 
                    <div className='size-of-email'>
                        <p>mahesh.gudipati200@gmail.com</p>
                    </div>
                 </div>
                 </div> 
                </div>
                </div>
                </div>
            )
        } 
       if(pathName === "Widget-Configuration" && Active === "Display"){
        return(
            <div>
            <div className='flexing-uploading'>
            <div className="Navbar-section">
            <div className="logo-and-logo-heading">
            <img src="https://i.im.ge/2024/06/07/Kygr3p.directrightlamalogo.png" alt="lama-logo"/>
            <h1>LAMA</h1>
            </div>  
            <h3>Podcast Upload Flow</h3> 
            <nav>
                <h4 className={trans === "Projects"?"background-color-pro":""} onClick={this.projectfolder}>1.Projects</h4> 
                <h4 className={trans === "Widget-Configuration"?"background-color-pro":""}>2.Widgets Configuration</h4> 
                <h4>3.Deployment</h4>  
                <h4>4.Pricing</h4>
            </nav> 
            <hr/> 
            <div className='margin-top-navbar'>
                <hr/>  
                <p onClick={this.clickingSettings} className={trans === "Settings" ? "background-color-pro":""}><CiSettings/> Settings</p>
            </div>
            </div>  
            <div>
            <div className='flex-of-upload'>
                <h5 className='adress-of-project-color'><CiHome /><span className='project-color'>/{getItem}/</span>{pathName}</h5>
                <div className='flexing-of-up'>
                <FaCaretDown/> EN
                <img src="https://i.im.ge/2024/06/09/KCZR5h.Ellipse-2country-logo.png" alt="country-logo" className='country-logo-size'/> <IoIosNotificationsOutline className='Notification-size'/>
            </div>
            </div> 
            <h1 className='adress-of-project-color'>Configuration</h1> 
            <div className='flexing-of-widget-configuration'>
                <h5 onClick={this.clickingGeneral} className={Active === "General" ?"background-color-pro1":"" }>General</h5> 
                <h5 onClick={this.clickingDisplay} className={Active === "Display" ?"background-color-pro1":"" }>Display</h5> 
                <h5>Advanced</h5>
            </div> 
            <hr/> 
            <div className='flexing-of-display'>
            <div>
            <div className='flexing-of-general'>
                <label htmlFor='color' className='display-label-element'>Primary Color</label> 
                <input type="text" id="color" className='size-of-primary-color'/> 
                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p> 
            </div> 
            <div className='flexing-of-general'>
                <label htmlFor='px' className='display-label-element'>Font Size (in PX)</label> 
                <input type="text" id="px" className='size-of-primary-color'/> 
                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
            </div> 
            </div>  
           
            <div>
            <div className='flexing-of-general'>
                <label htmlFor='color1' className='display-label-element'>Font Color</label> 
                <input type="text" id="color1" className='size-of-primary-color'/> 
                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
            </div> 
            <div className='flexing-of-general'>
                <label htmlFor='color2' className='display-label-element'>Chat height (in % of total Screen)</label> 
                <input type="text" id="color2" className='size-of-primary-color'/> 
                <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
            </div>
            </div>
            </div> 
            <h1>Show Sources</h1>
            <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
            <hr/> 
            <h3 className='adress-of-project-color '>Chat Icon</h3> 
           <div className='flexing-of-display'>
            <div>
            <div className='flexing-of-general'>
            <label htmlFor='chat' className='display-label-element'>Chat Icon Size</label> 
            <select id="chat" className='size-of-primary-color'>
             { 
                chatBotSizes.map(each => <option>{each.size}</option>)
             }
            </select>
            </div> 
            
            <div className='flexing-of-general'>
                <label htmlFor='bottom' className='display-label-element'>Distance from Bottom (in px)</label> 
                <input type="text" id="bottom" className='size-of-primary-color'/>
            </div>
            </div>
            <div>
            <div className='flexing-of-general'>
            <label htmlFor='position' className='display-label-element'>Position On Screen</label> 
            <select id="position" className='size-of-primary-color'>
             {
                ScreenPositions.map(each => <option>{each.position}</option>)
             }
            </select>
            </div> 
            <div className='flexing-of-general'>
                <label htmlFor='bottom1' className='display-label-element'>Horizontal Distance (in px)</label> 
                <input type="text" id="bottom1" className='size-of-primary-color'/>
            </div>
            </div>
            </div> 
            
            </div>
            </div> 
            </div>
        )
       }
       if(pathName === "Widget-Configuration" && Active === "General"){
        return(
            <div>
                <div className='flexing-uploading'>
                <div className="Navbar-section">
                <div className="logo-and-logo-heading">
                <img src="https://i.im.ge/2024/06/07/Kygr3p.directrightlamalogo.png" alt="lama-logo"/>
                <h1>LAMA</h1>
                </div>  
                <h3>Podcast Upload Flow</h3> 
                <nav>
                    <h4 className={trans === "Projects"?"background-color-pro":""} onClick={this.projectfolder}>1.Projects</h4> 
                    <h4 className={trans === "Widget-Configuration"?"background-color-pro":""}>2.Widgets Configuration</h4> 
                    <h4>3.Deployment</h4>  
                    <h4>4.Pricing</h4>
                </nav> 
                <hr/> 
                <div className='margin-top-navbar'>
                    <hr/>  
                    <p onClick={this.clickingSettings} className={trans === "Settings" ? "background-color-pro":""}><CiSettings/> Settings</p>
                </div>
                </div>  
                <div>
                <div className='flex-of-upload'>
                    <h5 className='adress-of-project-color'><CiHome /><span className='project-color'>/{getItem}/</span>{pathName}</h5>
                    <div className='flexing-of-up'>
                    <FaCaretDown/> EN
                    <img src="https://i.im.ge/2024/06/09/KCZR5h.Ellipse-2country-logo.png" alt="country-logo" className='country-logo-size'/> <IoIosNotificationsOutline className='Notification-size'/>
                </div>
                </div> 
                <h1 className='adress-of-project-color'>Configuration</h1> 
                <div className='flexing-of-widget-configuration'>
                    <h5 onClick={this.clickingGeneral} className={Active === "General" ?"background-color-pro1":"" }>General</h5> 
                    <h5 onClick={this.clickingDisplay} className={Active === "Display" ?"background-color-pro1":"" }>Display</h5> 
                    <h5>Advanced</h5>
                </div> 
                <hr/>
                <div className='flexing-of-general'>
                    <label htmlFor='chatbot-name' className='labeled-element'>Chatbot Name</label> 
                    <input type="text" id="chatbot-name" className='size-of-input-chatbot'/> 
                    <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                </div>
                <div className='flexing-of-general'>
                    <label htmlFor='welcome-message' className='labeled-element'>Welcome Message</label> 
                    <input type="text" id="welcome-message" className='size-of-input-chatbot'/> 
                    <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                </div>
                <div className='flexing-of-general'>
                    <label htmlFor='input-placeholder' className='labeled-element'>Input Placeholder</label> 
                    <input type="text" id="input-placeholder" className='size-of-input-chatbot'/> 
                    <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                </div>
                </div>
                </div>
                </div>
        )
       }
        if(pathName === "TransScript"){
            return(
                <div>
                <div className='flexing-uploading'>
                <div className="Navbar-section">
                <div className="logo-and-logo-heading">
                <img src="https://i.im.ge/2024/06/07/Kygr3p.directrightlamalogo.png" alt="lama-logo"/>
                <h1>LAMA</h1>
                </div>  
                <h3>Podcast Upload Flow</h3> 
                <nav>
                <h4 className={trans === "Projects"?"background-color-pro":""} onClick={this.projectfolder}>1.Projects</h4> 
                <h4 className={trans === "Widget-Configuration"?"background-color-pro":""} onClick={this.widgetConfig}>2.Widgets Configuration</h4> 
                <h4>3.Deployment</h4>  
                <h4>4.Pricing</h4>
                </nav> 
                <hr/> 
                <div className='margin-top-navbar'>
                    <hr/>  
                    <p onClick={this.clickingSettings} className={trans === "Settings" ? "background-color-pro":""}><CiSettings/> Settings</p>
                </div>
                </div>  
                <div>
                <div className='flex-of-upload'>
                    <h4 className='adress-of-project-color'><CiHome /><span className='project-color'>/{getItem}/</span>{pathName}</h4>
                    <div className='flexing-of-up'>
                    <FaCaretDown/> EN
                    <img src="https://i.im.ge/2024/06/09/KCZR5h.Ellipse-2country-logo.png" alt="country-logo" className='country-logo-size'/> <IoIosNotificationsOutline className='Notification-size'/>
                </div>
                </div> 
                {EditMode ?<div className='flexing-discard-and-save-exit-button'>
                   <h3 className='Projects-heading'>{pathHeading}</h3> 
                   <div>
                    <button className='discard-button'>Discard</button> 
                    <Popup modal trigger={<button className='save-and-exit-button'>Save & Exit</button>}>
                        {No =>(
                        <>
                        <h1>Do you Want to save & exit ?</h1> 
                        <button className='save-and-exit-button' onClick={this.yesbutton}>Yes</button> 
                        <button className='discard-button' onClick={(() => No())}>No</button>
                        </>)}
                    </Popup>
                   </div> 
                </div>:<h1 className='Projects-heading'>{pathHeading}</h1> }
                {EditMode ? 
                <div>
                    <button alt="Pencil" className='size-of-edit-mode-button text-area' onClick={this.clickingEditModeButton}><TiPencil/>Edit Mode</button>
                      <textarea rows="45" cols="80"className='edit-transcript' onChange={this.changingDescription}>{presentDescription}</textarea> 
                </div>:  
                 <div className='edit-transcript'> 
                      <button alt="Pencil" className='size-of-edit-mode-button' onClick={this.clickingEditModeButton}><TiPencil/>Edit Mode</button>
                      <p>{presentDescription}</p>
                    </div>}
                </div>
                </div>
                </div>
            )
        }
        if(totalContent.length > 0){
            return(
                <div>
                <div className='flexing-uploading'>
                <div className="Navbar-section">
                <div className="logo-and-logo-heading">
                <img src="https://i.im.ge/2024/06/07/Kygr3p.directrightlamalogo.png" alt="lama-logo"/>
                <h1>LAMA</h1>
                </div>  
                <h3>Podcast Upload Flow</h3> 
                <nav>
                    <h4 className={trans === "Projects"?"background-color-pro":""} onClick={this.projectfolder}>1.Projects</h4> 
                    <h4 className={trans === "Widget-Configuration"?"background-color-pro":""} onClick={this.widgetConfig}>2.Widgets Configuration</h4> 
                    <h4>3.Deployment</h4>  
                    <h4>4.Pricing</h4>
                </nav> 
                <hr/> 
                <div className='margin-top-navbar'>
                    <hr/>  
                    <p onClick={this.clickingSettings} className={trans === "Settings" ? "background-color-pro":""}><CiSettings/> Settings</p>
                </div>
                </div>  
                <div>
                <div className='flex-of-upload'>
                    <h4 className='adress-of-project-color'><CiHome /><span className='project-color'>/{getItem}/</span>{pathName}</h4>
                    <div className='flexing-of-up'>
                    <FaCaretDown/> EN
                    <img src="https://i.im.ge/2024/06/09/KCZR5h.Ellipse-2country-logo.png" alt="country-logo" className='country-logo-size'/> <IoIosNotificationsOutline className='Notification-size'/>
                </div>
                </div> 
                <h3 className='Projects-heading'>{pathHeading}</h3>
                <div className='flexing-of-three-boxes'>
                <Popup modal trigger={  
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCZnu1.Frame-1youtube-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>Youtube Video</h3>
                    </div>
                </div>
                }> 
                   {
                    close =>(
                    <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCZnu1.Frame-1youtube-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From Youtube</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div> 
                    <button className='save-button' onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                <Popup modal trigger={
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCKMIW.Frame-2spootify-logo.png" alt="spootify-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>Spootify Podcast</h3>
                        
                    </div>
                </div>}>
                { close => (
                <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCKMIW.Frame-2spootify-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From Spootify</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div> 
                    <button className='save-button'  onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                <Popup modal trigger={
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCKrfG.image-2RSS.png" alt="rss-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>From RSS Feed</h3>
                    </div>
                </div>}>
                {close =>(
                    <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCKrfG.image-2RSS.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From RSS</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div>
                    <button className='save-button' onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                </div>
                <div className='square-box-projects'>
                    <h3>All files are processed! Your widget is ready to go!</h3>
                    <button className='try-it-out'>Try it out!</button>
                </div> 
                <div className="App">
                <table>
                <th>Name</th>
                    <th>Upload Date & Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                    {
                        totalContent.map(each => <EachUpload fileName={each} editingDescription={this.editingDescription}/>)
                    } 
                </table>
                </div> 
                </div>
                </div>
                </div> 
            )
        } 
        return(
            <div>
                <div className='flexing-uploading'>
                <div className="Navbar-section">
                <div className="logo-and-logo-heading">
                <img src="https://i.im.ge/2024/06/07/Kygr3p.directrightlamalogo.png" alt="lama-logo"/>
                <h1>LAMA</h1>
                </div>  
                <h3>Podcast Upload Flow</h3> 
                <nav>
                    <h4 className={trans === "Projects"?"background-color-pro":""} onClick={this.projectfolder}>1.Projects</h4> 
                    <h4 className={trans === "Widget-Configuration"?"background-color-pro":""} onClick={this.widgetConfig}>2.Widgets Configuration</h4> 
                    <h4>3.Deployment</h4>  
                    <h4>4.Pricing</h4>
                </nav> 
                <hr/> 
                <div className='margin-top-navbar'>
                    <hr/>  
                    <p onClick={this.clickingSettings} className={trans === "Settings" ? "background-color-pro":""}><CiSettings/> Settings</p>
                </div>
                </div>  
                <div>
                <div className='flex-of-upload'>
                    <h4 className='adress-of-project-color'><CiHome /><span className='project-color'>/{getItem}/</span>Upload</h4>
                    <div className='flexing-of-up'>
                    <FaCaretDown /> EN
                    <img src="https://i.im.ge/2024/06/09/KCZR5h.Ellipse-2country-logo.png" alt="country-logo" className='country-logo-size'/> <IoIosNotificationsOutline className='Notification-size'/>
                </div>
                </div> 
                <h3 className='Projects-heading'>Upload</h3>
                <div className='flexing-of-three-boxes'>
                <Popup modal trigger={  
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCZnu1.Frame-1youtube-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>Youtube Video</h3>
                    </div>
                </div>
                }> 
                   {
                    close =>(
                    <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCZnu1.Frame-1youtube-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From Youtube</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div> 
                    <button className='save-button' onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                <Popup modal trigger={
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCKMIW.Frame-2spootify-logo.png" alt="spootify-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>Spootify Podcast</h3>
                        
                    </div>
                </div>}>
                { close => (
                <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCKMIW.Frame-2spootify-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From Spootify</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div> 
                    <button className='save-button'  onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                <Popup modal trigger={
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCKrfG.image-2RSS.png" alt="rss-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>From RSS Feed</h3>
                    </div>
                </div>}>
                {close =>(
                    <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCKrfG.image-2RSS.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From RSS</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div>
                    <button className='save-button' onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                </div>
                <div className='flexing-of-three-boxes'>
                <Popup modal trigger={
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCZnu1.Frame-1youtube-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>Youtube Video</h3>
                    </div>
                </div>}>
                {close => (
                   <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCZnu1.Frame-1youtube-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From Youtube</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div> 
                    <button className='save-button'  onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                <Popup modal trigger={
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCKMIW.Frame-2spootify-logo.png" alt="spootify-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>Spootify Podcast</h3>
                    </div>
                </div>}>
                {close => (
                <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCKMIW.Frame-2spootify-logo.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From Spootify</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div> 
                    <button className='save-button'  onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                <Popup modal trigger={
                <div className='each-youtube-video'>
                    <img src="https://i.im.ge/2024/06/09/KCKrfG.image-2RSS.png" alt="rss-logo" className='Y-logo-size'/>
                    <div>
                        <h3>Upload</h3>
                        <h3>From RSS Feed</h3>
                    </div>
                </div>}>
                {close =>(
                <div>
                    <div className='flexing-inside-popup'>
                    <img src="https://i.im.ge/2024/06/09/KCKrfG.image-2RSS.png" alt="youtube-logo" className='Y-logo-size'/>
                    <h3>Upload From Rss</h3> 
                    <RxCross2 onClick={() => close()}/> 
                    </div>
                    <div >
                        <div className='flexing-of-input-item'>
                        <label htmlFor='Name'>Name</label> 
                        <input type="text" id="Name" onChange={this.Name}/> 
                        </div> 
                        <div className='flexing-of-input-item'>
                            <label htmlFor='Description'>Description</label> 
                            <textarea id="Description" rows="8" cols="8" onChange={this.description}>
                                {}
                            </textarea>
                        </div>
                    </div> 
                    <button className='save-button'  onClick={this.saving}>Save</button>
                    </div>)}
                </Popup>
                </div>
                <p className='alignment-of-or'>or</p>
                <div className='selecting-file'>
                    <MdCloudUpload className='upload-size'/>
                    <h3 className='file-text'>Select a file or drag and drop here (Podcast Media or Transcription Text)</h3>
                    <p>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p> 
                    <button className='select-file-button'>Select a File</button>
                </div>
                </div> 
                </div>   
            </div>
        )
    }
} 
export default Upload 