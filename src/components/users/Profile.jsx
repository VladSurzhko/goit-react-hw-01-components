import PropTypes from 'prop-types';
import UserCss from "../users/user.module.css"


 const Profile = ({username, tag, location, avatar, stats, followers, views, likes }) => {
    return (
      <div className={UserCss.profile}>
    <div className={UserCss.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={avatar}
      />
      <p className={UserCss.name}>{username}</p>
      <p className={UserCss.tag}>{tag}</p>
      <p className={UserCss.location}>{location}</p>
    </div>
  
    <ul className={UserCss.stats}>
      <li>
        <span className={UserCss.label}>Followers:</span>
        <span className={UserCss.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={UserCss.label}>Views:</span>
        <span className={UserCss.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={UserCss.label}>Likes:</span>
        <span className={UserCss.quantity}>{stats.likes}</span>
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