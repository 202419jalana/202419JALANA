import React, { useState } from 'react';
import axios from 'axios';

const AdmissionAdd = () => {
    const [formData, setFormData] = useState({
        student_name: '',
        student_email: '',
        status: 'pending',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/admissions/', formData)
            .then(response => alert('Admission added successfully'))
            .catch(error => console.error('Error adding admission:', error));
    };

    return (
        <div>
            <h2>Add Admission</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="student_name" placeholder="Student Name" onChange={handleChange} required />
                <input type="email" name="student_email" placeholder="Student Email" onChange={handleChange} required />
                <select name="status" onChange={handleChange}>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </select>
                <button type="submit">Add Admission</button>
            </form>
        </div>
    );
};

export default AdmissionAdd;
