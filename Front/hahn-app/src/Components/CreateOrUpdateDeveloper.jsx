import { useEffect, useState } from "react";
import DeveloperService from "../Services/DeveloperService";
import { useNavigate, useParams } from "react-router-dom";

const CreateOrUpdateDeveloper = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [stack,setStack] = useState("");
    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value)
    }
    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    }
    const changeStackHandler = (event) => {
        setStack(event.target.value);
    }
    const saveOrUpdateDeveloper = (e) => {
        e.preventDefault();
        const developer = {firstName: firstName,lastName:lastName,stack:stack};
        console.log(developer);
        if(id < 0){
            DeveloperService.createDeveloper(developer).then(()=>{
                navigate("/");
            });
        } else {
            DeveloperService.updateDeveloper(id,developer).then(()=>{
                navigate("/");
            });
        }
    }
    const cancel = () => {
        navigate("/")
    }
    useEffect(()=>{
        if(id < 0) {
            return;
        }
        DeveloperService.getDeveloperById(id).then(res => {
            const developer = res.data;
            setFirstName(developer.firstName);
            setLastName(developer.lastName);
            setStack(developer.stack);
        }).catch(err => console.log(err));
    },[]);
    
    return(
        <>
        <div className="container" style={{ marginTop: "4rem" }}>
    <div className="row">
        <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">{id < 0 ? "Add" : "Update"} Developer</h3>
            <div className="card-body">
                <form className="form" onSubmit={saveOrUpdateDeveloper}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            name="firstName" 
                            className="form-control" 
                            value={firstName} 
                            onChange={changeFirstNameHandler} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            name="lastName" 
                            className="form-control" 
                            value={lastName} 
                            onChange={changeLastNameHandler} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Stack</label>
                        <input 
                            type="text" 
                            placeholder="Stack" 
                            name="stack" 
                            className="form-control" 
                            value={stack} 
                            onChange={changeStackHandler} 
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-danger" onClick={cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

        </>
    );
}
export default CreateOrUpdateDeveloper;