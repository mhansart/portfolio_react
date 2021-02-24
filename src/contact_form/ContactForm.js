import React, { useState } from 'react';
// import axios from 'axios';
import ajaxPost from '../functions/function';

function ContactForm() {
  const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    description: '',
  });
  const [isVisible, setIsVisible] = useState('hidden');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setText('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // destructure from inputs
    const { email, name, description } = inputs;
    if (email !== '' && name !== '' && description !== '') {
      setText('Envoi');
      setIsVisible('visible');
      const data = new FormData();
      data.append('email', email);
      data.append('name', name);
      data.append('message', description);
      ajaxPost('../../mail.php?task=write', data)
        .then((response) => {
          console.log(response);
          if (response === 'success') {
            setIsVisible('hidden');
            setText('Votre message a bien été envoyé. Merci !');
            setInputs({
              email: '',
              name: '',
              description: '',
            });
            // this.resetForm()
          } else if (response === 'fail') {
            setText('Erreur, veuillez réessayer.');
          }
        });
    } else {
      setText('Merci de remplir tous les champs.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex" data-aos="fade-up" data-aos-offset="0">
        <div className="ipt-after">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <span />
        </div>

        <div className="ipt-after">
          <input
            type="text"
            placeholder="Nom"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
          <span />
        </div>
      </div>

      <div className="txtarea-after">
        <textarea
          data-aos="fade-up"
          data-aos-offset="0"
          name="description"
          placeholder="Message"
          value={inputs.description}
          onChange={handleChange}
          cols="30"
          rows="10"
        />
        <span />
      </div>
      <div className="d-flex text-confirm">
        <p>{text}</p>
        <p style={{ visibility: isVisible }} className="points d-flex">
          <span className="point dot1" />
          <span className="point dot2" />
          <span className="point dot3" />
        </p>
      </div>
      <button data-aos="fade-up" data-aos-offset="0">
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
