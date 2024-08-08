
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.contact}>
      <p>{name}: {number}</p>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
