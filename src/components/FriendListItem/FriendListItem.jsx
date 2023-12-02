// import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={css.status}>{`${isOnline}`}</span>
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
