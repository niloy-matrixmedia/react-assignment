import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import "./adddata.css";

const Adddata = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [body, setBody] = useState('');
  const [slug, setSlug] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('access_token');

      let imageUrl = '';
      if (image) {
        const formData = new FormData();
        formData.append('file', image);

        const imageResponse = await axios.post('http://demoyourprojects.com:5085/file', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });

        imageUrl = imageResponse.data.data.fileLink;
        console.log(imageUrl,"imageUrl........>>>>>>>>>>>>>>>>>>>>>>..............");
      }

      const data = {
        title,
        image: imageUrl,
        caption,
        body,
      };

      const response = await axios.post('http://demoyourprojects.com:5085/post', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      navigate("/dashboard");
      console.log("Data added successfully:", response.data);
      
      // Optionally, you can clear the form here or redirect the user
      setTitle('');
      setImage(null);
      setCaption('');
      setBody('');
    } catch (error) {
      console.error("Error adding data:", error);
    }
  }

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input className="form-input" type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input className="form-input" type="file" onChange={e => setImage(e.target.files[0])} required />
        </div>
        <div className="form-group">
          <label>Caption:</label>
          <input className="form-input" type="text" value={caption} onChange={e => setCaption(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea className="form-input" value={body} onChange={e => setBody(e.target.value)} required />
        </div>
        <div className="form-group">
          <button className="submit-button" type="submit">Add Data</button>
        </div>
      </form>
    </div>
  );
}

export default Adddata;