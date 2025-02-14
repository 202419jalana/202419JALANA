import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdmissionEdit = ({ id }) => {
    const [formData, setFormData] = useState({
        student_name: '',
        student_email: '',
        status: '',
    });

    useEffect(() => {
        axios.get(`/api/admissions/${id}/`)
            .then(response => setFormData(response.data))
            .catch(error => console.error('Error fetching admission:', error));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/admissions/${id}/`, formData)
            .then(response => alert('Admission updated successfully'))
            .catch(error => console.error('Error updating admission:', error));
    };

    const handleDelete = () => {
        axios.delete(`/api/admissions/${id}/`)
            .then(response => alert('Admission deleted successfully'))
            .catch(error => console.error('Error deleting admission:', error));
    };

    return (
        <div>
            <h2>Edit Admission</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="student_name" value={formData.student_name} onChange={handleChange} required />
                <input type="email" name="student_email" value={formData.student_email} onChange={handleChange} required />
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </select>
                <button type="submit">Update Admission</button>
                <button type="button" onClick={handleDelete}>Delete Admission</button>
            </form>
        </div>
    );
};

export default AdmissionEdit;
