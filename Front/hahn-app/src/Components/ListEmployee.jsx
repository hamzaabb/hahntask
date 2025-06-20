import { useEffect, useState } from "react";
import DeveloperService from "../Services/DeveloperService";
import { useNavigate } from "react-router-dom";

const ListDeveloper = () => {
    const navigate = useNavigate();
    const [developers,setDevelopers] = useState([]);
    const editDeveloper = (developerId) => {
        navigate(`add-developer/${developerId}`)
    }
    const deleteDeveloper = (developerId) => {
        DeveloperService.DeleteDeveloper(developerId).then(() => {
            setDevelopers(developers.filter(emp => emp.id !== developerId));
        });
    }
    const viewDeveloper = (developerId) => {
        navigate(`view-developer/${developerId}`);
    }
    useEffect(()=>{
        DeveloperService.getDevelopers().then((res) => {
            setDevelopers(res.data);
        }).catch(err => console.log(err));
    },[]);
    return(
        <>
        <h2 className="text-center">Developers</h2>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                    <th>Developer FirstName</th>
                    <th>Developer LastName</th>
                    <th>Developer Stack</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        developers.map(
                            developer => 
                            <tr key= {developer.id}>
                                <td key={developer.firstName}>{developer.firstName}</td>
                                <td key={developer.lastName}>{developer.lastName}</td>
                                <td key={developer.stack}>{developer.stack}</td>
                                <td><button className="btn btn-info" onClick={()=>editDeveloper(developer.id)}>Update</button>
                                <button className="btn btn-danger" onClick={() => deleteDeveloper(developer.id)}>Delete</button>
                                <button className="btn btn-secondary" onClick={() => viewDeveloper(developer.id)}>View</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}
export default ListDeveloper;