import { Link } from "react-router-dom";
import Button from "../components/button";

const LoginToProceed = () => {
  return (
    <div className="padding-x max-width flex min-h-[60vh] items-center justify-center">
      <div className="border p-10 shadow-md">
        <h2 className="text-center">Your are not logged in</h2>
        <p className="mt-4 text-center">Please login to proceed</p>
        <div className="mt-4 flex justify-center">
          <Link to="/login">
            <Button text="Login" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginToProceed;
