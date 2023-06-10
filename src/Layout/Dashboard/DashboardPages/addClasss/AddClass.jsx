import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import useSecuireAxios from '../../../../Hooks/SecuireAxios/useSecuireAxios';

const igm_hosting_token = import.meta.env.VITE_IMAGE_UPLAOD_TOKEN
const AddClass = () => {
    const [axiosSecure] = useSecuireAxios()
    const { register, handleSubmit, reset } = useForm();
    const img_Hosting_Link = `https://api.imgbb.com/1/upload?key=${igm_hosting_token}`
    const { user } = useContext(AuthContext)


    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_Hosting_Link, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(images => {
                console.log(images)
                if (images.success) {
                    const imgUrl = images.data.display_url;
                    const { name, email, seat, status, price } = data
                    const addedClass = { name, email, seat, status, price: parseFloat(price), Imge: imgUrl }
                    console.log(addedClass)
                    axiosSecure.post('/classes', addedClass)
                        .then(data => {
                            console.log('posted new class', data.data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }
                        })

                }
            })
    };


    return (
        <div className="w-full px-10">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-4 items-center justify-center gap-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input defaultValue={user?.displayName} type="text"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input defaultValue={user?.email} type="email"
                            {...register("email", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4 items-center justify-center gap-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seat</span>
                        </label>
                        <input placeholder='Add the instructor name' type="number"
                            {...register("seat", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Status</span>
                        </label>
                        <input defaultValue={'pending'} type="text"
                            {...register("status", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4 items-center justify-center">
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>


                <input className="btn btn-sm bg-blue-600 text-white mt-3" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;