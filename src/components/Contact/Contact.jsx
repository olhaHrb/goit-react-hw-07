import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      <li className={css.card} key={id}>
        <ul>
          <li className={css.data}>
            <FaUser />
            {name}
          </li>
          <li className={css.data}>
            <FaPhone />
            {number}
          </li>
        </ul>
        <button onClick={handleClick}>Delete</button>
      </li>
    </ul>
  );
};

export default Contact;
