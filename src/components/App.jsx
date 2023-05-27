import Profile from "./users/Profile"
import user from "./users/user.json"

import Statistic from "./statistics/Statistic"
import data from "./statistics/data.json"

import FriendList from "./friends/FriendList"
import friends from "./friends/friends.json"

import TransactionHistory from "./TransactionHistory/Transaction";
import transactions from "./TransactionHistory/transactions.json"


// import Statistic from "./statistics/Statistic"
// import data from "./statistics/data.json"



export default function App() {
  return(
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      followers={user.followers}
      views={user.views} 
      likes={user.likes}
      />

      <Statistic title="Upload stats" stats={data} />


      <FriendList friends={friends} />;

      <TransactionHistory items={transactions} />;
    </div>
  )
}







// export default function Appp(){
//   return(
//     <ul>
// <Statistic title="Upload stats" stats={data} />
// <Statistic stats={data}/>
// </ul>
//   )
// }










// export const App = () => {
//   return (
//     <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>
//   );
// };
