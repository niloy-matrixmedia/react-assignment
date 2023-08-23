import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams(); // Extract the ID from the URL

  // Local state for each field
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post details when the component mounts
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`http://demoyourprojects.com:5085/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });
        console.log(response,"response...........>>>>>>>>>>>>>>>>>>>>>>.................");
        const postData = response.data;
        setTitle(postData.data.title);
        setBody(postData.data.body);
        setCaption(postData.data.caption);
        setImage(postData.data.image);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('access_token');
      await axios.put(`http://demoyourprojects.com:5085/post/${id}`, {
        title,
        body,
        caption,
        image
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      alert('Updated successfully!');
      navigate("/view-dashboard");
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }

  return (
    <div>
      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} required />
        </div>
        <div>
          <label>Caption:</label>
          <input type="text" value={caption} onChange={e => setCaption(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={e => setImage(e.target.value)} required />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default Update;