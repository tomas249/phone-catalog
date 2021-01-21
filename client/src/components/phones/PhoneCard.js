import './PhoneCard.css';
import React from 'react';

export default function PhoneCard({
  phone,
  handleDetails,
  handleDelete,
  handleEdit,
}) {
  return (
    <div className="card-group">
      <div className="card-container">
        <img
          onClick={() => handleDetails(phone)}
          className="card-image"
          src={process.env.REACT_APP_IMG_URL + phone.imageFileName}
          alt={phone.imageFileName}
        />
        <div className="card-title" onClick={() => handleDetails(phone)}>
          {phone.manufacturer} {phone.name}
        </div>
        <div className="card-price">{phone.price} €</div>
        <div className="btn-group">
          <button className="primary" onClick={() => handleEdit(phone)}>
            Edit
          </button>
          <button className="danger" onClick={() => handleDelete(phone)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
