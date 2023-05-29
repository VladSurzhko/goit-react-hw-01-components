import PropTypes from 'prop-types';
import friends from "./friends.json"
import fcss from "../friends/friends.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? fcss.online: fcss.offline;
  
  return (
    <li className={fcss.items}>
      <span className={`${fcss.status} ${statusClassName}`}></span>
      <img className={fcss.avatar} src={avatar} alt="User avatar" width="42" />
      <p className={fcss.name}>{name}</p>
    </li>
  );
};

const FriendsList = () => (
  <ul className={fcss.friendlist}>
    {friends.map((friend) => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

export default FriendsList;

FriendListItem.propTypes = {
  id:PropTypes.string,
  avatar:PropTypes.string,
  name:PropTypes.string,
}


// const friendsList = () => (

//     <ul className="friend-list">
//       {friends.map((item, isOnline) => (
//       <li className="items" key={item.id}>
//       <span className="status">{isOnline}</span>
//       <img className="avatars" src={item.avatar} alt="User avatar" width="70" />
//        <p className="name">{item.name}</p>
//     </li>
//       ))}
//     </ul>
// );

// export default friendsList;




