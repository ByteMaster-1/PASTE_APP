import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes,updateToPastes } from '../redux/pasteSlice';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ViewPaste = () => {
  const {id}= useParams();
  const allPates=useSelector((state)=>state.paste.pastes);
  const paste=allPates.find((p)=>p._id===id);
    return (
          
        <div>
        <div >
        <input
            className="border border-black-300 p-2 rounded mt-4 mr-2"
            type="text"
            placeholder="Enter Paste Title"
            value={paste.title}
            disabled
            
        />
    {/* <button className="bg-blue-500 text-white p-2 rounded mt-4 mr-2" onClick={createPaste}>
        {
            pasteId ? 'Update Paste' : 'Create Paste'
        }
    </button> */}
    </div>
    <div>
        <textarea name="text-area" id="1" value={paste.content}
        disabled 
         placeholder='Enter Paste Content' onChange={(e) => setValue(e.target.value)} 
         className="border border-black-300 p-2 rounded mt-4 mr-2" rows={20} cols={60}>
        </textarea>
    </div>
    <button className='bg-red-500  rounded mt-4 '>
        <NavLink to={'/pastes'} className={'text-white ' } >All Pastes</NavLink>
    </button>
    </div>

    )
}   
export default ViewPaste;
