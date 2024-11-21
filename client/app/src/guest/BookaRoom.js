import React from 'react';
import GuestNavBar from '../components/GuestNavBar';
import Stepper from '../components/Stepper';

const BookaRoom = () => {
    return(
        <div className="bg-slate-100 fullscreen"> {/* Set background to slate-100 */}
            <GuestNavBar /> 
            <Stepper />

            {/* This is the FormLayout component */}
            <div className="grid grid-cols-3 gap-4 p-6">
                <div className="col-span-2 bg-white p-6 shadow-md rounded-lg"> {/* Form container set to white with rounded corners */}
                    <h2 className="text-xl font-bold text-slate-600 text-left">ROOMS</h2>
                    {/* <p className="text-sm text-slate-400">Select a room to book</p> */}

                    {/* CONTAINER WITHIN CONTAINER 1 */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white flex justify-center items-center">
                            <div className="flex flex-col">
                                <h2 className="text-xl font-bold text-slate-600 text-left">Deluxe Room with King Bed</h2>
                                {/* Form container with fixed image size */}
                                <a href="/book-a-room" className="text-xl font-bold text-slate-600 text-left">
                                    <img
                                        src="/room_assets/MH-DELUXE-MODAL-KING.jpg"
                                        alt="Deluxe Room with King Bed"
                                        className="w-[500px] h-[200px] rounded-lg object-contain"
                                    />
                                </a>
                                <p className="text-sm text-slate-400">Fill in the form to book a room</p>
                            </div>
                        </div>
                        {/* 2ND CONTAINER */}
                        <div className="col-span-2 bg-white p-6 shadow-md rounded-base"> {/* Form container set to white with rounded corners */}
                            <p className="text-sm text-slate-400">Select a room to book</p>
                        </div>
                    
                        
                    </div>
                </div>
                    
                <div className="bg-white p-6 shadow-md rounded-lg"> {/* Form container set to white with rounded corners */}
                    <h2 className="text-base font-semibold text-slate-600">Room Details</h2>
                    <p className="text-sm text-slate-400">Fill in the form to book a room</p>
                </div>
            </div>
        </div>
    );
};
export default BookaRoom;