import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import jwt_decode from "jwt-decode";
import { NavLink, useNavigate } from 'react-router-dom'


const Viewdashboard = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem('access_token');

            const response = await axios.get(`http://demoyourprojects.com:5085/post`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (Array.isArray(response.data.data)) {
                setPosts(response.data.data);
            } else {
                console.warn('Unexpected response format from API');
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    const currentUserId = jwt_decode(localStorage.getItem('access_token'))._id;
    const deleteUser = async (id) => {
        try {
            // Get the access token from local storage
            const token = localStorage.getItem('access_token');

            // Confirm with the user before deleting
            if (!window.confirm("Are you sure you want to delete this post?")) {
                return;
            }

            // Attempt to delete the user
            const response = await axios.delete(`http://demoyourprojects.com:5085/post/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            // Check if the user was successfully deleted and refresh the list
            if (response.status === 200) {
                fetchPosts();
            } else {
                console.warn('Error deleting user:', response.data);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
    return (
        <div>
            <h1>View Dashboard</h1>
            {Array.isArray(posts) && posts.length > 0 ? (
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Caption</th>
                            <th>Body</th>
                            <th>Image</th>
                            <th>Slug</th>
                            <th style={{ paddingLeft: 70 }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            //  console.log(post._id,"post......................"),
                            <tr key={post.id || index}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.caption}</td>
                                <td>{post.body}</td>
                                <td><img src={post.image} alt={post.title} width={50} /></td>
                                <td>{post.slug}</td>
                                <td className='d-flex border border-white'>
                                    <NavLink to={`/view/${post._id}`}><button className='btn btn1 '><VisibilityIcon /> View</button></NavLink>
                                    <NavLink to={`/edit/${post._id}`}><button className='btn btn2 '><ModeEditIcon />Edit</button></NavLink>
                                    {post.uploadedBy === currentUserId && (
                                        <button className='btn btn3' onClick={() => deleteUser(post._id)}><DeleteIcon /> Delete</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
}

export default Viewdashboard;
