import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitForm } from './action';
import validator from 'validator';

const ContactForm = ({ submitForm, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = () => {
    const isValid = validator.isEmail(formData.email);
    setErrors({ ...errors, email: isValid ? '' : 'Enter a valid email address' });
  };

  const validatePhone = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const isValid = phoneRegex.test(formData.phone);
    setErrors({ ...errors, phone: isValid ? '' : 'Enter a valid French phone number' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'email', 'phone', 'message'];
    let formIsValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        setErrors({ ...errors, [field]: 'This field is required' });
        formIsValid = false;
      }
    });

    if (formIsValid) {
      validateEmail();
      validatePhone();


      if (!errors.email && !errors.phone) {

        submitForm(formData);
        onSubmit(formData);
        alert('Formulaire envoyer');
      }
    } else {
      alert('Veuillez completer tous les formulaires');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom:
          <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Adresse email:
          <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} onBlur={validateEmail} />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Numero telephone:
          <input type="tel" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} onBlur={validatePhone} />
          {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
          <textarea id="message" name="message" className="form-control" value={formData.message} onChange={handleChange} />
          {errors.message && <p className="text-danger">{errors.message}</p>}
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Envoyer</button>
    </form>
  );
};

const mapDispatchToProps = {
  submitForm,
};

export default connect(null, mapDispatchToProps)(ContactForm);
