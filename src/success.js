import React from 'react';
import { connect } from 'react-redux';

const SuccessMessage = ({ formData }) => {
  return (
    <div>
      <h2>Formulaire envoyé</h2>
      <p>Nom: {formData.name}</p>
      <p>Adresse email: {formData.email}</p>
      <p>Telephone: {formData.phone}</p>
      <p>Message: {formData.message}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.formData,
});

export default connect(mapStateToProps)(SuccessMessage);
