import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const Users2 = () => {
    const {data:newUsers}=useQuery({
        queryKey:["user"],
        queryFn:async ()=>{
             const res = await fetch('https://coffee-store-server-lilac-seven.vercel.app/users')
             return res.json()
        }
    })
    
    const handleDelete = (id) => {
        // console.log(id)     

        fetch(`https://coffee-store-server-lilac-seven.vercel.app/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)


                //   const remainUsers = newUsers.filter(user => user._id !== id)


            })

    }

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              newUsers?.map(user =>
                <tr key={user._id}>
                  <th>1</th>
                  <td>{user.name}</td>
                  <td>{user?.user?.email}</td>
                  <td>
                    <button className="btn">Edit</button>
                    <button className="btn" onClick={() => handleDelete(user._id)}>X</button>
                  </td>
  
                </tr>
  
              )
            }
  
          </tbody>
        </table>
      </div>
    );
}

export default Users2;