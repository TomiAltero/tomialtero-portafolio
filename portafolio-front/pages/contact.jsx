import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
import axios from 'axios';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/portafolio', { 'nombre': name, 'email': email, 'mensaje': message })
      if (res.status === 201) {
        setSuccessMessage('¡Tu mensaje se ha enviado correctamente!');
        setName('');
        setEmail('');
        setMessage('');
        setErrors(null);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: 'Hubo un error al enviar el formulario. Por favor, intenta de nuevo más tarde.' });
      }
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Si quieres contactarme</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Completa este formulario</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors && errors.name && (
                <p className={styles.error}>{errors.name[0]}</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors && errors.email && (
                <p className={styles.error}>{errors.email[0]}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors && errors.message && (
              <p className={styles.error}>{errors.message[0]}</p>
            )}
          </div>
          <button type="submit">Enviar</button>
          {successMessage && <p className={styles.success}>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

