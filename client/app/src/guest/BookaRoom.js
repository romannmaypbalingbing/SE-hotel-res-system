import React from 'react';
import GuestNavBar from '../components/GuestNavBar';
import Stepper from '../components/Stepper';
 
const BookaRoom = ({ supabase }) => {


    return(
        <div className="bg-slate-100 fullscreen"> {/* Set background to slate-100 */}
            <GuestNavBar />
            <Stepper />

            {/* This is the FormLayout component */}
            <div className="grid grid-cols-3 gap-4 p-6">
                <div className="col-span-2 bg-white p-6 shadow-md rounded-lg"> {/* Form container set to white with rounded corners */}
                    {/* <h2 className="text-xl font-bold text-slate-600 text-left">ROOMS</h2> */}
                    {/* <p className="text-sm text-slate-400">Select a room to book</p> */}

                    {/* CONTAINER WITHIN CONTAINER 1 */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white flex justify-center items-center">
                            <div className="flex flex-col">
                                {/* TITLE */}
                                <h2 className="text-2xl font-semibold text-red-700 text-left">Deluxe King</h2>
                                
                                {/* Form container with fixed image size */}
                                <a href="/book-a-room" className="text-xl font-bold text-slate-600 text-left">
                                    <img
                                        src="/room_assets/MH-DELUXE-MODAL-KING.jpg"
                                        alt="Deluxe Room with King Bed"
                                        className="w-[500px] h-[200px] rounded-lg object-contain" 
                                    />
                                </a>
                                
                                {/* Icon and Text #1*/}
                                <div className="flex items-center text-left mb-2">
                                    <p className="text-sm text-slate-600 px-1">2 Adults | 2 Children</p>
                                    <p className="text-sm text-slate-400">(12 years old and below)</p>
                                </div>

                                {/* Icon and Text #1*/}
                                <p className="text-sm text-slate-400 flex items-center text-left px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 256 256" className="mr-3">
                                    <path fill="#9f1239" d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56h32v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48v-88l80-80l80 80Z"></path>
                                </svg>      
                                    25㎡ | Floor: 2,3
                                </p>
                                {/* Icon and Text #2 */}
                                <p className="text-sm text-slate-400 flex items-center text-left px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mr-3">
                                        <path fill="#9f1239" d="M3 18v-5q0-.444.256-.946T4 11.3V9q0-.846.577-1.423T6 7h4.5q.517 0 .883.213q.365.212.617.587q.252-.375.617-.587Q12.983 7 13.5 7H18q.846 0 1.423.577T20 9v2.3q.489.252.744.754q.256.502.256.946v5h-1v-2H4v2zm9.5-7H19V9q0-.425-.288-.712T18 8h-4.5q-.425 0-.712.288T12.5 9zM5 11h6.5V9q0-.425-.288-.712T10.5 8H6q-.425 0-.712.288T5 9zm-1 4h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"></path>
                                    </svg>
                                    1 King Bed
                                </p>
                            </div>
                        </div>

                        {/* 2ND CONTAINER */}
                        <div className="col-span-2 bg-white p-6 shadow-md rounded-base text-left"> {/* Form container set to white with rounded corners */}
                            <span className="text-3xl font-semibold text-slate-700 text-left">PHP 4,600 </span>
                            <span className="text-2xl text-slate-400">/night</span>
                            <div className="grid grid-cols-3 gap-4">
                                <p className="text-sm text-slate-400 flex items-center text-left px-2">
                                    <img 
                                        src="/icons/fork-and-spoon.png"
                                        alt="Fork and Spoon Icon"
                                        className="w-4 h-5 mr-3 mt-3"
                                    />
                                    Free Breakfast
                                </p>    
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <p className="text-sm text-slate-400 flex items-center text-left px-2">
                                    <img 
                                        src="/icons/fork-and-spoon.png"
                                        alt="Fork and Spoon Icon"
                                        className="w-4 h-5 mr-3 mt-3 mb-2"
                                    />
                                    Free Breakfast
                                </p>    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-md rounded-lg"> {/* Form container set to white with rounded corners */}
                    <h2 className="text-lg font-semibold text-slate-600 text-left">Your Booked Rooms</h2>
                    <p className="text-sm text-slate-400">Fill in the form to book a room</p>
                </div>
            </div>
        </div>
)};
export default BookaRoom;