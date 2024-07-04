import css from "./FriendList.module.css";
import FriendListItem from "../FriendsItem/FriendsItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.profile_list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
