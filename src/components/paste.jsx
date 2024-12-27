import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Paste = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = pastes.filter((paste) => 
        paste.title && paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const dispach = useDispatch();
    function handledelete(pasteId){
        dispach(removeFromPastes(pasteId));
    }

    return (
        <div>
           {/* //search bar */}
           <input
            type='search'
            placeholder='Search Paste'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='p-2 border border-black-300 rounded-2xl mt-4 min-w-[600px]'
           />
           <div className='flex flex-col gap-5'>
            {/* // all pastes cards */}
            {
                filteredData.length > 0 && 
                filteredData.map((paste) => {
                    return (
                        <div className='border p-2 m-2' key={paste._id}>
                            <div className='text-lg font-bold'>{paste.title}</div>
                            <div className='text-sm text-gray-500'>{paste.createdAt}</div>
                            <div className='text-sm max-h-20 overflow-hidden'>{paste.content}</div>
                            <div>
                                <button className='bg-red-500 text-white p-2 rounded mt-4 mr-2' onClick={() => handledelete(paste?._id)}>Delete</button>
                                <NavLink to={`/?pasteId=${paste._id}`} className='bg-blue-500 text-white p-2 rounded mt-4 mr-2'>Edit</NavLink>
                                <button className='bg-green-500 text-white p-2 rounded mt-4 mr-2' type='submit'>
                                    <NavLink to={`/pastes/${paste._id}`} className='text-white'>View</NavLink>
                                </button>
                                <button className='bg-yellow-500 text-white p-2 rounded mt-4 mr-2' onClick={() => { navigator.clipboard.writeText(paste.content); toast.success("Copied to Clipboard") }}>Copy</button>
                                <button className='bg-orange-500 text-white p-2 rounded mt-4 mr-2'>Share</button>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        </div>
    );
}

export default Paste;