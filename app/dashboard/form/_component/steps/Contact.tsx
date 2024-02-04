import React, { useState } from 'react';

const options = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
    { value: "egg", label: "Egg" },
    { value: "apple", label: "Apple" },
    { value: "ban", label: "Banana" },
    { value: "none", label: "None" }
]

const Contact = () => {
    // State to hold selected options
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Function to handle checkbox selection
    const handleCheckboxChange = (option: any) => {
        if (selectedOptions.includes(option)) {
            // If already selected, remove it
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            // If not selected, add it
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    console.log(selectedOptions);   
    return (
        <div className='grid grid-cols-3 gap-6 text-gray-800'>
            {
                options.map(option => (
                    <div key={option.value} className={`${selectedOptions.includes(option.value) ? 'bg-teal-500' : 'bg-white' } border border-gray-200 rounded-md p-2`}>
                        <input
                            className={` border-gray-200 form-checkbox h-5 w-5  text-red-500 transition duration-150 ease-in-out rounded focus:outline-none focus:ring-0 focus:shadow-none `}
                            type="checkbox"
                            id={option.value}
                            value={option.value}
                            onChange={() => handleCheckboxChange(option.value)}
                        />
                        <label className='ml-2' htmlFor={option.value}>{option.label}</label>
                    </div>
                ))
            }
        </div>
    );
};

export default Contact;