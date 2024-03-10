
export default function Friend({friend}){

    const {name, id, email} = friend;

    return(
         <div className="box">
            <h3>Name: {name}</h3>
            <p><small>Id: {id} </small></p>
            <p><small>Email: {email}</small></p>
         </div>
    )
}