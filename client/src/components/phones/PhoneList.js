import React from 'react';
import PhoneCard from './PhoneCard';

export default function PhoneList({ phoneList, ...props }) {
  return phoneList.map((phone) => {
    return <PhoneCard key={phone._id} phone={phone} {...props} />;
  });
}
