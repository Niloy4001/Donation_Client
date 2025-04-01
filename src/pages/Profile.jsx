import React, { useContext, useEffect, useState } from 'react'
import bg from '../assets/profile-bg.png'
import { AuthContext } from '../context api/AuthProvider'
import Spinner from '../components/Spinner'
import useAxiosPublic from '../hooks/useAxiosPublic'
import toast from 'react-hot-toast'



const Profile = () => {
    const {user , loading} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [user1, setUser1] = useState({})

    

    useEffect(()=>{
        const fetchData = async()=>{
            const {data} = await axiosPublic.get(`/user?email=${user?.email}`)
            setUser1(data)
        }
        if (!loading) {
            fetchData()
        }
    },[user,user1])
    

    if (loading) {
        return <Spinner></Spinner>
    }

    
    const handleSubmit = async(e) =>{
        e.preventDefault()
       const name = e.target.name.value;

        console.log(name);
        try {
           const {data} = await axiosPublic.patch(`/user?email=${user?.email}`,{name: name})
            toast.success("Updated Successfull")
            setUser1({})
            document.getElementById('my_modal_5').close()
       } catch (error) {
        toast.error(error.message)
       }
       
        

    }

    
    
    
  return (
    <div>
        <div className='max-w-7xl h-[400px] mx-auto relative'>
            <img src={bg} alt="" className='w-full h-full'/>
            <div className='w-[50%] md:w-[15%] h-[40%] absolute -bottom-20  left-1/2 transform -translate-x-1/2 p-1.5 bg-white rounded-[50%]'>
                <img src={user?.photoURL} referrerPolicy='no-referrer' alt="" className='w-full h-full rounded-[50%]'/>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='my-[100px] flex flex-col items-center space-y-2'>
                <h1>{user1?.name} <div className="badge badge-success font-bold">{user1?.role}</div></h1>
                <h1>Email: {user1?.email}</h1>
                <button className='btn' onClick={()=>document.getElementById('my_modal_5').showModal()}>Update</button>
            </div>
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Edit</h3>
            <form onSubmit={handleSubmit}>
                <label className="fieldset-label">Name</label>
                <input type="text" name='name' className="input w-full" defaultValue={user1?.name} />
                <button className="btn btn-neutral mt-4">Update</button>
            </form>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default Profile