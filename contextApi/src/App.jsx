import UserContextProvider from "./context/UserContextProvider";

import "./App.css";
import Login from "./components/login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="flex">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
