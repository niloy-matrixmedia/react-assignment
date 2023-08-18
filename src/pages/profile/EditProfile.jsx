import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.get(`http://demoyourprojects.com:5085/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                setUserData(response.data.data);
                setName(response.data.data.name);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('access_token');
            const formData = new FormData();
            formData.append('name', name);
            if (profilePic) {
                formData.append('profile_pic', profilePic);
            }
            const response = await axios.put(`http://demoyourprojects.com:5085/user`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage("Profile updated successfully!");
            setUserData(response.data.data);
        } catch (error) {
            console.error("Error updating profile:", error);
            setMessage("Error updating profile. Please try again.");
        }
    };

    return (
        <div>
            <h1>Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Profile Picture:</label>
                    <input 
                        type="file" 
                        onChange={(e) => setProfilePic(e.target.files[0])} 
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default UpdateProfile;