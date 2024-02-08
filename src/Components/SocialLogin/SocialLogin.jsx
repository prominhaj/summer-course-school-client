import { FaGoogle } from "react-icons/fa";

const SocialLogin = ({ googleLogin }) => {
  return (
    <div className="pt-4">
      <h6 className="text-xl font-medium text-center dark:text-gray-100">
        Social Login
      </h6>
      <div className="flex items-center justify-center gap-5 mt-3">
        <button
          onClick={googleLogin}
          type="button"
          className="flex items-center gap-3 p-3 text-xl text-gray-100 bg-red-500 rounded-lg dark:text-gray-100 dark:bg-gray-500 "
        >
          <FaGoogle className="text-2xl" />
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
