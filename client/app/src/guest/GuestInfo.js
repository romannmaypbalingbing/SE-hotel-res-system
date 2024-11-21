import React, { useState } from 'react';
import GuestNavBar from '../components/GuestNavBar';
import Stepper from '../components/Stepper';

const BookaRoom = () => {
    const [formData, setFormData] = React.useState({
        lastName: "",
        firstName: "",
        email: "",
        contactNumber: "",
        address: "",
        country: "",
    });

    const [shuttleService, setShuttleService] = React.useState(false);


    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleShuttleChange = () => {
        setShuttleService(!shuttleService);
    };

    const handlearrivalDateChange = (evt) => {
        setSelectedDateTime(evt.target.value);
    };

    const country = [
        "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
        "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia",
        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory",
        "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
        "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island",
        "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Cook Islands",
        "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
        "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
        "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland",
        "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia",
        "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam",
        "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands",
        "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan",
        "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius",
        "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco",
        "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua",
        "Niger", "Nigeria", "Niue", "Norfolk Island", "North Macedonia", "Northern Mariana Islands", "Norway", "Oman",
        "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn",
        "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russian Federation", "Rwanda",
        "Saint Barthélemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)",
        "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)",
        "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands",
        "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan",
        "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Western Sahara",
        "Yemen", "Zambia", "Zimbabwe"
      ];
      
      

        return (
            <div className="bg-slate-100 h-screen"> {/* Set background to slate-100 */}
                <GuestNavBar /> 
                <Stepper />

                {/* This is the FormLayout component */}
                <div className="flex justify-center items-start h-screen pt-">
                    <div className="bg-white p-6 w-1/2 shadow-md rounded-lg"> {/* Form container set to white with rounded corners */}
                        <div className="grid grid-cols-2 gap-4"> {/* Grid layout with 2 columns */}
                            
                            {/* Guest Information label */}
                            <div className="col-span-2">
                                <h2 className="text-xl font-semibold text-slate-600 text-left">
                                    Guest Information #1
                                </h2>
                            </div>

                            {/*    <!-- Last Name Input Field --> */}
                            <div className="relative">
                                <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-900 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="lastName"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-900 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Last Name
                                </label>
                            </div>


                            {/*    <!-- First Name Input Field --> */}
                            <div className="relative">
                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-900 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="firstName"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-900 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    First Name
                                </label>
                            </div>

                            {/* Email Input Field */}
                            <div className="relative">
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-900 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"     
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-900 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                Email
                                </label>
                            </div>

                            {/* Contact Number Input Field */}
                            <div className="relative">
                                <input
                                    id="contactNumber"
                                    type="text"
                                    name="contactNumber"
                                    placeholder="Contact Number"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                className="peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-900 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"                               
                                />
                                <label
                                    htmlFor="contactNumber"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-900 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                Contact Number
                                </label>
                            </div>
                        </div>

                        {/* Adds line below the Contact Number field */}
                        <div className="w-full border-t border-slate-300 mt-6 "></div> 

                        {/* Address Input Field */}
                        <div className="relative my-6">
                            <input
                                id="address"
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                className="peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-900 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="address"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-900 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                Address (Optional)
                            </label>
                        </div>

                        {/* 2 column grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/*    <!-- Country  --> */}
                            <div className="relative">
                                <label 
                                    htmlFor="country" 
                                    className="block text-sm font-medium text-slate-700">
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    className="peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-900 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
                                    <option value="" disabled selected>
                                            -- Country --
                                        </option>
                                        {country.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                </select>     
                            </div>
                        </div>

                        {/* Adds line below the Contact Number field */}
                        <div className="w-full border-t border-slate-300 mt-6 "></div>

                        {/* Additional Information label */}
                        <label className="block text-sm text-xl text-slate-500 text-left mt-4">
                            Additional Information
                        </label>

                        {/* Checkbox for services */}
                        <div className="flex items-center mt-4">
                            <input
                                type="checkbox"
                                id="shuttleservice"
                                className="form-checkbox h-5 w-5 text-red-600 border-slate-400 rounded"
                            />
                            <label htmlFor="shuttleservice" className="ml-2 block text-base text-slate-500 mr-2 inline-block transition-colors duration-200 peer-checked:bg-red-500 peer-checked:border-red-500">
                                 Hotel Shuttle Service
                            </label>
                        </div>
                        
                        {/* Additional options if shuttle service is checked */}
                        {shuttleService && (
                            <div className="relative my-4">
                                <label htmlFor="arrivalDate">Arrival Date:</label>
                                <select
                                    id="date"
                                    value={setSelectedDateTime.split(" ")[0] || ""}
                                    onChange={handlearrivalDateChange}
                                    className="form-select"
                                >
                                    <option value="">Select a Date</option>
                                    
                                </select>
                                
                        )};



                        <div className="relative my-4">
                            <input
                                id="addInfo"
                                type="text"
                                name="addInfo"
                                placeholder="Contact Number"
                                className="peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-900 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="id-01"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-900 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Additional Informaton
                            </label>
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
    
export default BookaRoom;
