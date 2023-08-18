import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

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

    const deleteUser = async (id) => {
        try {
          const token = localStorage.getItem('access_token');
            const response = await axios.delete(`http://demoyourprojects.com:5085/post/${id}`, {
              headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json"
              }
          });
          console.log(response,"responsedelete.........>>>>>>>>>>>>>>>>>>>............");
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
                            <th>Uploaded By</th>
                            <th>Body</th>
                            <th>Image</th>
                            <th>Slug</th>
                            <th style={{ paddingLeft: 70 }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={post.id || index}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.caption}</td>
                                <td>{post.uploadedBy}</td>
                                <td>{post.body}</td>
                                <td><img src={post.image} alt={post.title} width={50} /></td>
                                <td>{post.slug}</td>
                                <td className='d-flex border border-white'>
                                    <button className='btn btn1 '><VisibilityIcon /> View</button>
                                    <button className='btn btn2 '><ModeEditIcon />Edit</button>
                                    <button className='btn btn3 ' onClick={() => deleteUser(post.id)} ><DeleteIcon />Delete</button>
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
