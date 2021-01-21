import './PhoneDetails.css';
import React from 'react';

export default function PhoneDetails({ phone, handleDelete, handleEdit }) {
  return (
    <div className="details-container">
      <div className="details-info">
        <img
          className="details-photo"
          src={process.env.REACT_APP_IMG_URL + phone.imageFileName}
          alt={phone.imageFileName}
        />
        <div className="details-data">
          <h1>{phone.manufacturer + ' ' + phone.name}</h1>
          <span>Screen: {phone.screen}</span>
          <span>Processor: {phone.processor}</span>
          <span>Ram: {phone.ram} GB</span>
          <span>Color: {phone.color.replace(',', ' | ')}</span>
        </div>
      </div>
      <span>
        <strong>Description</strong>
      </span>
      <div className="details-description">{phone.description}</div>
      <div className="btn-group">
        <button className="primary" onClick={() => handleEdit(phone)}>
          Edit
        </button>
        <button className="danger" onClick={() => handleDelete(phone)}>
          Delete
        </button>
      </div>
    </div>
  );
}
