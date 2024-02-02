"use client"

import React, { useState } from 'react';
import axios from 'axios';

const EnquirySubmit = () => {
    const initialFormData = {
        name: '',
        phone: '',
        email: '',
        destination: '',
        package: 'Best of south India tour',
        arrivingDate: '',
        departureDate: '',
        noAdults: '',
        noChildern: '',
    };

    const [formData, setFormData] = useState({
        arrivingDate: "",
        departureDate: "",
    });
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make the API request
            const response = await axios.post('http://localhost:3001/api/user', formData);

            // Set the success message
            setSubmitMessage('Enquiry booked');

            // Clear the form inputs
            setFormData(initialFormData);

            console.log('Axios Response:', response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let day = currentDate.getDate();
        day = day < 10 ? `0${day}` : day;
        return `${year}-${month}-${day}`;
    };

    const getNextDay = (date) => {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay.toISOString().split('T')[0];
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
 
            <form className="contact__form v2-search-form" onSubmit={handleSubmit}>
                {/* Your form fields go here, with onChange handlers */}
                {/* ... (unchanged) */}
                <div className="row">
                    
                    <div className="form-groups col-md-12">
                        
            {submitMessage && (
                    <div className="alert alert-success" role="alert" style={{ width: '100%' }}>
                        {submitMessage}
                    </div>
                )}
            
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter your name..."
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-groups col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Enter your phone..."
                            value={formData.phone}
                            onChange={handleChange}

                        />
                         {formData.phone && isNaN(formData.phone) && <div className="error-message">Please enter a valid number.</div>}
        {formData.phone && formData.phone.length < 10 && <div className="error-message">Phone number should be at least 10 digits.</div>}
                    </div>
                    <div className="form-groups col-md-6">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter your email..."
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-groups col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            name="destination"
                            placeholder="Enter your destination..."
                            value={formData.destination}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-groups col-md-6">
                        <select
                            name="package"
                            className="group-fr"
                            required={true}
                            value={formData.package}
                            onChange={handleChange}
                            style={{ backgroundColor: "#fff" }}
                        >
                            <option value="" disabled="" selected="">
                                Select your package
                            </option>
                            <option value="Honeymoon Package">Honeymoon Package</option>
                            <option value="Family Package">Family Package</option>
                            <option value="Holiday Package">Holiday Package</option>
                            <option value="Group Package">Group Package</option>
                            <option value="Regular Package">Regular Package</option>
                        </select>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="form-groups col-md-6">
                        <input
                            type="date"
                            className="group-fr custom-date-input input-field date"
                            name="arrivingDate"
                            required={true}
                            placeholder="Arrival Date"
                            value={formData.arrivingDate}
                            onChange={handleChange}
                            min={getCurrentDate()}
                        />
                    </div>
                    <div className="form-groups col-md-6">
                        <input
                            type="date"
                            className="group-fr custom-date-input input-field date"
                            name="departureDate"
                            required={true}
                            placeholder="Departure Date"
                            value={formData.departureDate}
                            onChange={handleChange}
                            min={formData.arrivingDate ? getNextDay(formData.arrivingDate) : getCurrentDate()}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-groups col-md-6">
                        <select
                            name="noAdults"
                            className="group-fr"
                            value={formData.noAdults}
                            onChange={handleChange}
                            style={{ backgroundColor: "#fff" }}
                        >
                            <option value="">No of adults</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="form-groups col-md-6">
                        <select
                            name="noChildern"
                            className="group-fr col-md-12"
                            value={formData.noChildern}
                            onChange={handleChange}
                            style={{ backgroundColor: "#fff" }}
                        >
                            <option value="">No of children</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <input
                        type="submit"
                        value="Book Now"
                        name="carSubmit"
                        style={{
                            backgroundColor: 'red',
                            color: '#fff',
                            borderRadius: 0,
                        }}
                        className="btn btn-large theme-btn"
                    />
                </div>
            </form>

        </div>
    );
};

export default EnquirySubmit;
