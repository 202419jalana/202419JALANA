import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdmissionList = () => {
    const [admissions, setAdmissions] = useState([]);

    useEffect(() => {
        axios.get('/api/admissions/')
            .then(response => setAdmissions(response.data))
            .catch(error => console.error('Error fetching admissions:', error));
    }, []);

    return (
        <div>
            <h2>Admission List</h2>
            <ul>
                {admissions.map(admission => (
                    <li key={admission.id}>
                        {admission.student_name} - {admission.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdmissionList;
