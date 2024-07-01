import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.divProfile}>
      <div className={css.divCard}>
        <img src={image} alt="User avatar" className={css.imgUser} />
        <p className={css.pCardName}>{name}</p>
        <p className={css.pCard}>@{tag}</p>
        <p className={css.pCard}>{location}</p>
      </div>

      <ul className={css.ulStats}>
        <li className={css.liStats}>
          <span className={css.spanTitle}>Followers</span>
          <span className={css.spanInfo}>{stats.followers}</span>
        </li>
        <li className={css.liStats}>
          <span className={css.spanTitle}>Views</span>
          <span className={css.spanInfo}>{stats.views}</span>
        </li>
        <li className={css.liStats}>
          <span className={css.spanTitle}>Likes</span>
          <span className={css.spanInfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
