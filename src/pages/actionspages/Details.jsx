import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./details.css"
const Details = () => {
  const { id } = useParams();

  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const token = localStorage.getItem('access_token');

        const response = await axios.get(`http://demoyourprojects.com:5085/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (response.data) {
          setPostDetails(response.data);
        } else {
          console.warn('Unexpected response format from API');
        }
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPostDetails();
  }, [id]); // dependency on `id` to re-run the effect if it changes

  if (!postDetails) {
    return <div>Loading...</div>;
  }
console.log(postDetails.data,"postDetails.....................>>>>>>>>>>>>>>>>>>>>>>>>>...............");
return (
  <div className="details-container">
    <p><strong>Title:</strong> {postDetails.data.title}</p>
    <p><strong>Caption:</strong> {postDetails.data.caption}</p>
    <strong>Image:</strong>
    <img src={postDetails.data.image} alt={postDetails.data.title} />
    <div className="details-section">
      <strong>Body:</strong>
      <p>{postDetails.data.body}</p>
    </div>
    <div className="details-section">
      <strong>Slug:</strong>
      <p>{postDetails.data.slug}</p>
    </div>
  </div>
);
}

export default Details;