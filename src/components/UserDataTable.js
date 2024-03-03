import { useContext } from "react";
import appContexts from "../contexts/appContexts";
import { Button } from "./UI";

const UserDataTable = () => {
  const { username, no, onChangeUserNameHandler } = useContext(appContexts);

  const onClickHandler = () => {
    onChangeUserNameHandler();
  };

  return (
    <table className="w-full border-collapse border border-gray-500">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border border-gray-500">No</th>
          <th className="p-2 border border-gray-500">Name</th>
          <th className="p-2 border border-gray-500">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border border-gray-500">{no}</td>
          <td className="p-2 border border-gray-500">{username}</td>
          <td>
            <button
              onClick={onClickHandler}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Click Me!
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDataTable;
