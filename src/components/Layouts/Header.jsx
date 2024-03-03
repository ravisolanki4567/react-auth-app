import { useContext } from "react";
import AppContexts from "../../contexts/appContexts";
import { Link } from "react-router-dom";
const Header = () => {
  const { username, isDarkTheme, theme } = useContext(AppContexts);

  const onClickHandler = () => {
    isDarkTheme();
  };

  return (
    <header className="bg-gray-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:text-gray-200">
              Profile
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          {/* Theme Change Icon */}
          <button
            className="text-white hover:text-gray-200"
            onClick={onClickHandler}
          >
            {theme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18a6 6 0 100-12 6 6 0 000 12z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 0v2m0 20v2m18-11h-2m-16 0H2m18 0c0-3.077-2.935-5.6-6.418-5.996a1.85 1.85 0 00-.315-.028c-2.208 0-4.26 1.086-5.512 2.899A5.93 5.93 0 004 11.07M20 11.93c0 4.642-5.373 8.423-10 8.423s-10-3.78-10-8.423m10 8.423a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            )}
          </button>

          {/* User Icon - Replace 'user-icon.svg' with the actual path to your user icon image */}
          <img
            src="/assets/images/user.png"
            alt="User Icon"
            className="w-8 h-8 rounded-full"
          />

          {/* User Name - Replace 'John Doe' with the actual user name */}
          <span className="text-white">{username}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
