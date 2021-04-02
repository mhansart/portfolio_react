import React, { useState } from 'react';
import axios from 'axios';
import { ReactComponent as Check } from './check.svg';

function ContactForm() {
  const h = window.innerHeight;
  const [disabled, setDisabled] = useState('');
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
      setDisabled('disabled');
      setText('Envoi');
      setIsVisible('visible');
      const data = new FormData();
      data.append('email', email);
      data.append('name', name);
      data.append('message', description);
      axios({
        method: 'post',
        url: `https://formcarry.com/s/${process.env.REACT_APP_FORMCARRY}`,
        data,
      })
        .then((response) => {
          if (response.data.status === 'success') {
            setIsVisible('hidden');
            setText('Votre message a bien été envoyé. Merci !');
            setInputs({
              email: '',
              name: '',
              description: '',
            });
          } else {
            setText('Erreur, veuillez réessayer.');
          }
          setDisabled('');
        });
    } else {
      setText('Merci de remplir tous les champs.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex" data-aos="fade-up" data-aos-offset="0">
        <div className="ipt-after">
          <label htmlFor="email" style={{ display: 'none' }}>Email:</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <span />
        </div>

        <div className="ipt-after">
          <label htmlFor="name" style={{ display: 'none' }}>Nom:</label>
          <input
            id="name"
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
        <label htmlFor="description" style={{ display: 'none' }}>Message:</label>
        <textarea
          id="description"
          data-aos="fade-up"
          data-aos-offset="0"
          name="description"
          placeholder="Message"
          value={inputs.description}
          onChange={handleChange}
          cols="30"
          rows={h > 650 ? 10 : h / 85}
        />
        <span />
      </div>
      <div className="d-flex text-confirm" data-aos="fade-up" data-aos-offset="0">
        <button disabled={disabled}>
          Envoyer
        </button>
        <div className="d-flex text-sending">
          <p>{text === 'Votre message a bien été envoyé. Merci !' && <Check />}{text}</p>
          <p style={{ visibility: isVisible }} className="points d-flex">
            <span className="point dot1" />
            <span className="point dot2" />
            <span className="point dot3" />
          </p>
        </div>
      </div>

    </form>
  );
}

export default ContactForm;
