import React from 'react';
import GuestNavBar from '../components/GuestNavBar';
import Stepper from '../components/Stepper';

const BookaRoom = () => {
    return(
        <div>
            <GuestNavBar />
            <Stepper />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-gray-800">Book a Room</h1>
            </div>
        </div>
    )



}
export default BookaRoom;