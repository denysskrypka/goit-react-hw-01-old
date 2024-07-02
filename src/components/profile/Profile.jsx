import css from "./Profile.module.css";

const Profile = ({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={css.container}>
      <div className={css.profile_info}>
        <img className={css.profile_img} src={avatar} alt="user avatar" />
        <p className={css.profile_username}>{username}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>
      <ul className={css.profile_stats}>
        <li className={css.profile_list_item}>
          <span className={css.profile_list_title}>Followers</span>
          <span className={css.profile_list_text}>{followers}</span>
        </li>
        <li className={css.profile_list_item}>
          <span className={css.profile_list_title}>Views</span>
          <span className={css.profile_list_text}>{views}</span>
        </li>
        <li className={css.profile_list_item}>
          <span className={css.profile_list_title}>Likes</span>
          <span className={css.profile_list_text}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
