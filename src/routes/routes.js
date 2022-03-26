import { Route, Routes } from "react-router"
import Login from '../components/login';
import SignUp from '../components/signup';
import About from '../components/about';
import ContactUs from '../components/contact_us';
import Profile from '../components/profile';
import Settings from '../components/settings';
import Resetpassword from '../components/forgotpassword';
import App from '../App';
import NotFound from "../components/notfound";
import Home from "../components/secure/home";
import RequireAuth from "../services/requireAuth";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/Home" element={
                // <RequireAuth>
                    <Home />
                // </RequireAuth>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default MyRoutes