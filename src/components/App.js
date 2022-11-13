import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "./../data/user.json";
import data from "./../data/data.json";

const App = () => {
	return (
		<>
			<Profile user={user} />
			<Statistics title="Upload stats" data={data} />
		</>
	);
};

export default App;
