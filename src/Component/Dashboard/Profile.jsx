import { useContext } from "react";
import { AuthContext } from "../Page/Authentication/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="w-full  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                   
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.photoURL} alt="user image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.displayName} </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user.email} </span>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;