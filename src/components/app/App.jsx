import Profile from "../profile/Profile";
import userData from "./userData.json";
import FriendsList from "../friends/Friends";
import friends from "./friends.json";
import transactionData from "./transactions.json";
import Transaction from "../transaction/Transaction";

import "./App.css";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <Transaction items={transactionData} />
    </>
  );
}

export default App;
