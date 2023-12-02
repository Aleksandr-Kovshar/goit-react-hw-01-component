import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import user from "../user.json";
import data from "../data.json";
import friendsList from "../friends.json";

export const App = () => {
  return (
    <>
      <Profile
        key={`${user.username}${user.tag}`}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friendsList} />
    </>
  );
};
