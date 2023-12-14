import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {" "}
      </span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`User ${name} avatar`}
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};
FriendListItem.propTypes = PropTypes.exact({
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});
