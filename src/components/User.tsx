import { useDispatch, useSelector } from "react-redux"
import { deleteUser, getAllUser } from "../store/reducer/userReducer"
import { useEffect } from "react"
export default function User() {
    const data:any= useSelector(state=>state)
    const disPatch=useDispatch();
    useEffect(()=>{
        disPatch(getAllUser());
    },[])
    console.log(data);
    const handleDeleteUser=(id:number)=>{
        let confirmDelete = window.confirm("may muon xoa khong");
        if(confirmDelete){
            disPatch(deleteUser(id));
        }
    }
    
  return (
    <div>User
        <ul>
            {data.userReducer.users.map((user:any)=>{
                return <li key={user.id}>{user.name}
                <button onClick={() =>handleDeleteUser(user.id)}>xoa</button></li>
            })}
        </ul>
    </div>
  )
}
