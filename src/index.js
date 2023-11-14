import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ContactForm from './contact';
import SuccessMessage from './success';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    setFormSubmitted(true);
  };

  return (
    <Provider store={store}>
      <div className="container mt-4">
        <h1 className="mb-4">Formulaire test</h1>
        <ContactForm onSubmit={handleFormSubmit} />
        {formSubmitted && <SuccessMessage />}
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
