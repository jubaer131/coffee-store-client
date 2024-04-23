import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedCoffee = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    const { _id, name, quantity, Suplier, Taste, Category, Details, Photo } = coffee


    const handleupdateCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const Suplier = form.Suplier.value;
        const Taste = form.Taste.value;
        const Category = form.Category.value;
        const Details = form.Details.value;
        const Photo = form.Photo.value;
        const updateCoffee = { name, quantity, Suplier, Taste, Category, Details, Photo }
        console.log(updateCoffee)

        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'success',
                        text: 'coffee update succeesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>

            <h1 className="text-green-500 text-3xl text-center">update coffee: {name}</h1>
            <div className="space-y-2 max-w-96 mx-auto text-center">
                <p className="font-medium">Personal Inormation</p>
                <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
            </div>
            <section className="p-10 dark:bg-gray-100 dark:text-gray-900 shadow-xl">
                <form onSubmit={handleupdateCoffee} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className=" w-full">
                                    <div className="label">
                                        <span className="label-text"> Coffee Name</span>

                                    </div>
                                    <input type="text" name="name" placeholder=" Coffee Name" defaultValue={name} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">    Available quantity</span>

                                    </div>
                                    <input type="text" name="quantity" placeholder="Available quantity" defaultValue={quantity} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text"> Suplier</span>

                                    </div>
                                    <input type="text" name="Suplier" placeholder="Suplier Name" defaultValue={Suplier} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">   Taste     </span>

                                    </div>
                                    <input type="text" name="Taste" placeholder="  Taste" defaultValue={Taste} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">   Category    </span>

                                    </div>
                                    <input type="text" name="Category" placeholder="   Category" defaultValue={Category} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">  Details  </span>

                                    </div>
                                    <input type="text" name="Details" placeholder="  Details" defaultValue={Details} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text"> Photo url </span>

                                    </div>
                                    <input type="url" name="Photo" placeholder="  Photo url" defaultValue={Photo} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full">
                                <input type="submit" value="update coffee" className="btn btn-block bg-green-500" />
                            </div>



                        </div>
                    </fieldset>

                </form>
            </section>


        </div>
    );
};

export default UpdatedCoffee;

// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";


// const UpdateCoffee = () => {

//     const coffee = useLoaderData();
//     const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

//     const handleUpdateCoffee = event => {
//         event.preventDefault();

//         const form = event.target;

//         const name = form.name.value;
//         const quantity = form.quantity.value;
//         const supplier = form.supplier.value;
//         const taste = form.taste.value;
//         const category = form.category.value;
//         const details = form.details.value;
//         const photo = form.photo.value;

//         const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

//         console.log(updatedCoffee);

//         // send data to the server
//         fetch(`http://localhost:5000/coffee/${_id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(updatedCoffee)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Coffee Updated Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                 }
//             })
//     }

//     return (
//         <div className="bg-[#F4F3F0] p-24">
//             <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>
//             <form onSubmit={handleUpdateCoffee}>
//                 {/* form name and quantity row */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Coffee Name</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 ml-4">
//                         <label className="label">
//                             <span className="label-text">Available Quantity</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form supplier row */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Supplier Name</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 ml-4">
//                         <label className="label">
//                             <span className="label-text">Taste</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form category and details row */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Category</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 ml-4">
//                         <label className="label">
//                             <span className="label-text">Details</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form Photo url row */}
//                 <div className="mb-8">
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                 </div>
//                 <input type="submit" value="Update Coffee" className="btn btn-block" />

//             </form>
//         </div>
//     );
// };

// export default UpdateCoffee;