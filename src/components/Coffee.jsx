import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, loadedCoffees, setLoadedCoffees }) => {

    const { _id, name, chef, taste, photo } = coffee;

    const handleDelete = _id => {
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

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // update the loaded coffee state
                            const remainingCoffees = loadedCoffees.filter(coffee => coffee._id !== _id);
                            setLoadedCoffees(remainingCoffees);

                        }
                    })

            }
        });
    }

    return (
        <div className="shadow-xl card lg:card-side bg-base-100">
            <figure>
                <img
                    src={photo}
                    alt="coffee" className='w-[200px] h-[150px]'/>
            </figure>
            <div className="flex items-center justify-between w-full m-4">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="justify-end card-actions join join-vertical">
                    <button className="btn join-item">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-red-500 btn join-item">X</button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;