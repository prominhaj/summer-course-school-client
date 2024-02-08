import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="pt-4">
      <h6 className="text-xl font-medium text-center">Social Login</h6>
      <div className="flex items-center justify-center gap-5 mt-3">
        <button
          type="button"
          className="text-[#FF0000] dark:text-gray-100 p-3 bg-gray-300 dark:bg-gray-500 rounded-full"
        >
          <FaGoogle className="text-2xl" />
        </button>
        <button
          type="button"
          className="p-3 text-black bg-gray-300 rounded-full dark:text-gray-100 dark:bg-gray-500"
        >
          <FaGithub className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
