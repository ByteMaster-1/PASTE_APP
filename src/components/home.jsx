import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const allPates = useSelector((state) => state.paste.pastes);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        };
        if (pasteId) {
            // update paste
            dispatch(updateToPastes(paste));
        } else {
            // create paste
            dispatch(addToPastes(paste));
        }
        // clear the form
        setTitle('');
        setValue('');
        setSearchParams({});
    }

    useEffect(() => {
        if (pasteId) {
            const paste = allPates.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
        else{
            setTitle('');
        setValue('');
        setSearchParams({}); 
        }
    }, [pasteId]);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input
                    className="border border-gray-300 p-2 rounded mt-4 mr-2 w-full"
                    type="text"
                    placeholder="Enter Paste Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded mt-4 mr-2 w-full"
                    onClick={createPaste}
                >
                    {pasteId ? 'Update Paste' : 'Create Paste'}
                </button>
            </div>
            <div>
                <textarea
                    name="text-area"
                    id="1"
                    value={value}
                    placeholder="Enter Paste Content"
                    onChange={(e) => setValue(e.target.value)}
                    className="border border-gray-300 p-2 rounded mt-4 mr-2 w-full"
                    rows={10}
                    cols={50}
                ></textarea>
            </div>
        </div>
    );
};

export default Home;