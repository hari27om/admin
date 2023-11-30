import UserInterface from "../components/UserInterface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  return (
    <div className="Main">
      <UserInterface />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default Main;
