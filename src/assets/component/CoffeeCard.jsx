import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, Suplier, Taste, Category, Details, Photo } = coffee
    const handledelete = _id => {
        console.log(_id)
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

                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });


    }

    return (

        <div className="card  card-side   bg-base-100 shadow-xl rounded-3xl">
            <figure className="rounded-3xl"><img className="w-80 h-48 rounded-3xl" src={Photo} alt="Shoes" /></figure>
            <div className=" flex justify-between w-full p-10 pr-5">
                <div className="space-y-3">
                    <h2 className="card-title">{name}</h2>
                    <p>{Category}</p>
                    <p>{Category}</p>
                    <p>{Category}</p>
                </div>

                <div className="card-actions justify-end gap-4 space-y-5">
                    <div className="join join-vertical">
                        <button className="btn join-item">view</button>

                        <Link to={`updatecoffee/${_id}`}>
                            <button className="btn join-item">Edite</button>
                        </Link>
                        <button onClick={() => handledelete(_id)} className="btn join-item bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CoffeeCard;

// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";


// const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

//     const { _id, name, quantity, supplier, taste, photo } = coffee;

//     const handleDelete = _id => {
//         console.log(_id);
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {


//                 fetch(`http://localhost:5000/coffee/${_id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             Swal.fire(
//                                 'Deleted!',
//                                 'Your Coffee has been deleted.',
//                                 'success'
//                             )
//                             const remaining = coffees.filter(cof => cof._id !== _id);
//                             setCoffees(remaining);
//                         }
//                     })

//             }
//         })
//     }

//     return (
//         <div className="card card-side bg-base-100 shadow-xl">
//             <figure><img src={photo} alt="Movie" /></figure>
//             <div className="flex justify-between w-full pr-4">
//                 <div>
//                     <h2 className="card-title">Name: {name}</h2>
//                     <p>{quantity}</p>
//                     <p>{supplier}</p>
//                     <p>{taste}</p>
//                 </div>
//                 <div className="card-actions justify-end">
//                     <div className="btn-group btn-group-vertical space-y-4">
//                         <button className="btn">View</button>
//                         <Link to={`updateCoffee/${_id}`}>
//                             <button className="btn">Edit</button>
//                         </Link>
//                         <button
//                             onClick={() => handleDelete(_id)}
//                             className="btn bg-orange-500">X</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CoffeeCard;