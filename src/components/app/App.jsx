import Profile from "../Profile/Profile";
import userData from "./userData.json";

import FriendList from "../Friends/FriendList";
import friends from "./friends.json";

import TransactionHistory from "../Transaction/Transaction";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
