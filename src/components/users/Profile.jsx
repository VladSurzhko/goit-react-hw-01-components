import PropTypes from 'prop-types';
import usercss from "../users/user.module.css"


 const Profile = ({username, tag, location, avatar, stats, followers, views, likes }) => {
    return (
      <div className={usercss.profile}>
    <div className={usercss.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={avatar}
      />
      <p className={usercss.name}>{username}</p>
      <p className={usercss.tag}>{tag}</p>
      <p className={usercss.location}>{location}</p>
    </div>
  
    <ul className={usercss.stats}>
      <li>
        <span className={usercss.label}>Followers:</span>
        <span className={usercss.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={usercss.label}>Views:</span>
        <span className={usercss.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={usercss.label}>Likes:</span>
        <span className={usercss.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
    );
  };
  export default Profile

  Profile.propTypes = {
    username:PropTypes.string,
    tag:PropTypes.string,
    location:PropTypes.string,
    avatar:PropTypes.string,  
    followers:PropTypes.string,
    views:PropTypes.string,
    likes:PropTypes.string,
  }