import { Profile } from "components/Profile/Profile";
import user from "../user.json";

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
    </>
  );
};
