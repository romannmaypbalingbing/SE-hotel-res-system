import React from 'react';
import GuestNavBar from '../components/GuestNavBar';
import Stepper from '../components/Stepper';

export default class ReservationInfo extends React.Component {
    render() {
        return (
            <div className="bg-slate-100 h-screen"> {/* Set background to slate-100 */}
                <GuestNavBar /> 
                <Stepper />

                {/* This is the FormLayout component */}
                <div className="flex justify-center items-start h-screen pt-20">
                    <div className="bg-white p-6 w-1/2 shadow-md rounded-lg"> {/* Form container set to white with rounded corners */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col"> {/* Added container for label and input */}
                                <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 text-left">
                                    Check-In
                                </label>
                                <input
                                    type="date"
                                    id="check-in"
                                    className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                                />
                            </div>
                            <div className="flex flex-col"> {/* Added container for label and input */}
                                <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 text-left">
                                    Check-Out
                                </label>
                                <input
                                    type="date"
                                    id="check-out"
                                    className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2"
                                />
                            </div>
                            <div className="flex flex-col"> {/* Added container for label and input */}
                                <label htmlFor="pax" className="block text-sm font-medium text-gray-700 text-left">
                                    Number of Guests
                                </label>
                                <input
                                    type="number"
                                    id="pax"
                                    className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                                />
                            </div>
                            <div className="flex flex-col">
                            <label htmlFor="room-type" className="block text-sm font-medium text-gray-700 text-left">
                                    Room Type
                                </label>
                                <input
                                    type="text"
                                    id="room-type"
                                    className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                                    placeholder="e.g. Deluxe, Suite"
                                />
                            </div>
                            <div /> {/* Empty div to maintain grid alignment */}
                        </div>
                        <div className="mt-6">
                            <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
