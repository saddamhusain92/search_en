import { useState,useEffect } from "react";
import Signin from "./components/Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/configration";
import Home from "./components/Home";
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user] = useAuthState(auth);
  const[profile,setProfile] = useState({})
  useEffect(() => {
    setInterval(() => {
      setIsLogin(false);
    }, 1000);
  },[]);
  if (!isLogin) {
    return <div className="App">{user ?<Home/>: <Signin />}</div>;
  } else {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        Loading.......
      </div>
    );
  }
}

export default App;
