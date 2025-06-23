import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import developerService from "../Services/DeveloperService";

const Viewdeveloper = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [developer, setdeveloper] = useState({});
    useEffect(() => {
        developerService.getdeveloperById(id).then( (res) =>{
            setdeveloper(res.data);
            console.log(developer)
        }).catch(err => console.log(err));
    },[]);
    return(
    <>
      <div class="card" style={{"width": "18rem","marginTop":"4rem","marginLeft":"auto","marginRight":"auto"}}>
        <img class="card-img-top" style={{"border":"2px solid"}} src="https://www.svgrepo.com/show/33058/developer.svg" alt="Card image cap"/>
        <div class="card-body">
        <h5 class="card-title">developer details </h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">First Name: {developer.firstName}</li>
        <li class="list-group-item">Last Name: {developer.lastName}</li>
        <li class="list-group-item">Email: {developer.email}</li>
        </ul>
        <button onClick={()=>{navigate('/')}} class="btn btn-primary">back</button>
        </div>
     </div>
    </>
    );
}
export default Viewdeveloper;