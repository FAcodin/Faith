import './App.css';
// import  resetpassword from "./components/resetpassword";
import {useNavigate} from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';
const app = initializeApp(firebaseConfig);

function App() {
  const navigate = useNavigate()
 const demoHandler = () => {
   navigate("/login")
 }

  return (
    <div onClick={demoHandler} ></div>
  

  );
}
export default App;