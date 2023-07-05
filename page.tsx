'use client'
import React, { useState } from 'react';

function ImageChange() {
  const [nim, setNim] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the image URL based on the input value
    setImageUrl(`https://duanol.unnes.ac.id/v2/primer/user_ava/${nim}/124.aspx`);
  };

  const handleChange = (e) => {
    setNim(e.target.value);
  };

  return (
    <div>
      <img src={imageUrl} alt="User Avatar" height={'400px'} width={'300px'}/>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nim} onChange={handleChange} placeholder="Input NIM" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ImageChange;
