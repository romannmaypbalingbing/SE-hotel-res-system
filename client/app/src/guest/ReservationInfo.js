import React from 'react';
import GuestNavBar from '../components/GuestNavBar';
import Stepper from '../components/Stepper';

export default class ReservationInfo extends React.Component {
    render() {
        return (
            <div>
                <GuestNavBar /> 
                <Stepper />

                {/* This is the formlayout component*/}
                <div className="bg-white-300 p-6"> 
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">
                            Check-In
                        </label>
                        <input
                            type="date"
                            id="check-in"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                        </div>
                        <div>
                        <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">
                            Check-Out
                        </label>
                        <input
                            type="date"
                            id="check-out"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                        <div>
                        <label   
                htmlFor="pax" className="block text-sm font-medium text-gray-700">
                            Pax
                        </label>
                        <input
                            type="number"
                            id="pax"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                        <div   
                /> {/* Empty div to maintain grid alignment */}
                    </div>
                    <div className="mt-6">
                        <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                        Search
                        </button>
                    </div>
                </div>
  

            </div>
        );
    }
}