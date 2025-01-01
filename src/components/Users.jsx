import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const users = useLoaderData()
  // console.log(users)
  const [newUsers, setNewUsers] = useState(users)
  const handleDelete = (id) => {
    // console.log(id)


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`https://coffee-store-server-lilac-seven.vercel.app/users/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"


              
              });

              const remainUsers = newUsers.filter(user => user._id !== id)
              setNewUsers(remainUsers)
            }
          })

      }
    });


  

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
            newUsers.map(user =>
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
};

export default Users;