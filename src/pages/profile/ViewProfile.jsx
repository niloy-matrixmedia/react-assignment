import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewProfile = () => {
    // const { id } = useParams();
    const [userData, setUserData] = useState({});
    console.log(userData,"userData.....................");
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get token from local storage
                const token = localStorage.getItem('access_token');

                const response = await axios.get(`http://demoyourprojects.com:5085/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                setUserData(response.data.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            <p>Email: {userData.email}</p>
            <p>Name: {userData.name}</p>
            <img src={userData.profile_pic} alt={userData.name} />
        </div>
    );
}

export default ViewProfile;
