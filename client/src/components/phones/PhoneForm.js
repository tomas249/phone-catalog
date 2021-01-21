import React from 'react';
import Input from '../common/Input';

const Form = ({
  data,
  title,
  onSave,
  onCancel,
  onChange,
  saving = false,
  errors = {},
}) => {
  const customStyle = {
    errorMsg: {
      width: '90%',
      padding: '1rem',
      borderRadius: '10px',
      color: 'white',
      marginBottom: '1rem',
      backgroundColor: 'rgb(221, 115, 115)',
    },
  };
  return (
    <form onSubmit={onSave}>
      <h2>
        {data && data._id ? 'Edit' : 'Add'} {title}
      </h2>
      {errors.onSave && <div style={customStyle.errorMsg}>{errors.onSave}</div>}
      <Input
        name="name"
        label="Name"
        value={data.name}
        onChange={onChange}
        error={errors.title}
      />

      <Input
        name="manufacturer"
        label="Manufacturer"
        value={data.manufacturer}
        onChange={onChange}
        error={errors.title}
      />

      <Input
        name="description"
        label="Description"
        value={data.description}
        onChange={onChange}
        error={errors.title}
      />

      <Input
        name="imageFileName"
        label="Image file name"
        value={data.imageFileName}
        onChange={onChange}
        error={errors.title}
      />

      <Input
        name="processor"
        label="Processor"
        value={data.processor}
        onChange={onChange}
        error={errors.title}
      />

      <Input
        name="screen"
        label="Screen"
        value={data.screen}
        onChange={onChange}
        error={errors.title}
      />

      <Input
        name="ram"
        label="Ram"
        value={data.ram}
        onChange={onChange}
        error={errors.title}
      />

      <Input
        name="color"
        label="Colors"
        value={data.color}
        onChange={onChange}
        error={errors.title}
      />

      <Input
        name="price"
        label="Price"
        value={data.price}
        onChange={onChange}
        error={errors.title}
      />

      <div className="btn-group">
        <button className="primary" type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
        <button className="danger" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
