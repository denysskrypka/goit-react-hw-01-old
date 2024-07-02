import clsx from "clsx";
import css from "./FriendsItem.module.css";
const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const status = isOnline === true ? "Online" : "Offline";
  return (
    <div className={css.friend_card}>
      <img className={css.friend_img} src={avatar} alt="friend avatar" />
      <p className={css.friend_title}>{name}</p>
      <p
        className={clsx(
          css.friend_status,
          isOnline === true ? css.online : css.offline
        )}
      >
        {status}
      </p>
    </div>
  );
};
export default FriendListItem;
