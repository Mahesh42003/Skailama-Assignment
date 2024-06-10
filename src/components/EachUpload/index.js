import './index.css'

const EachUpload=(props) => {
    const {fileName,editingDescription}=props 
    const months = [ 
        "January", "February",  
        "March", "April", "May",  
        "June", "July", "August", 
        "September", "October",  
        "November", "December" 
    ]; 
    const {name}=fileName
    const date=new Date()  

    const editing=() => {
        editingDescription(fileName)
    }
    
    return(
          <>
                <tr>
                    <td>{name}</td>
                    <td>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()} | {date.getHours()}:{date.getMinutes()}</td>
                    <td>Done</td>
                    <td><button onClick={editing}>Edit</button><button>Delete</button></td>
                </tr>
        </>
                
    )
}  
export default EachUpload