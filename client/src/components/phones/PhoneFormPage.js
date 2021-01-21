import React, { useState } from 'react';
import { connect } from 'react-redux';
import { savePhone, setPhone } from '../../redux/actions/phoneActions';
import { toast } from 'react-toastify';
import PhoneForm from './PhoneForm';

const phoneModel = {
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: '',
  imageFileName: '',
  screen: '',
  processor: '',
  ram: '',
};

function PhoneFormPage({
  handleSave,
  handleCancel,
  phone,
  savePhone,
  setPhone,
}) {
  const [phoneData, setPhoneData] = useState(phone || phoneModel);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const phoneCommercialName = phone && `${phone.manufacturer} ${phone.name}`;

  function handleChange(event) {
    const { name, value } = event.target;

    setPhoneData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onSave(event) {
    event.preventDefault();
    setSaving(true);
    savePhone(phoneData)
      .then(() => {
        toast.success('Phone saved');
        setPhone(phoneModel);
        handleSave();
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  function onCancel(event) {
    event.preventDefault();
    const isEdited = JSON.stringify(phone) !== JSON.stringify(phoneData);
    if (isEdited) {
      const isSure = window.confirm(
        'It looks like you have been editing something. ' +
          'If you leave before saving, your changes will be lost.'
      );
      if (!isSure) return;
    }
    handleCancel();
  }

  return (
    <PhoneForm
      data={phoneData}
      title={phoneCommercialName}
      onCancel={onCancel}
      onSave={onSave}
      onChange={handleChange}
      saving={saving}
      errors={errors}
    />
  );
}

const mapDispatchToProps = {
  savePhone,
  setPhone,
};

export default connect(null, mapDispatchToProps)(PhoneFormPage);
