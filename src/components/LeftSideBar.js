import {
  BellIcon,
  HomeIcon,
  LogoutIcon,
  MailIcon,
} from "@heroicons/react/outline";
import Avatar from "./Avatar";
import Options from "./Options";

const LeftSideBar = () => {
  return (
    <div
      className="flex flex-col text-white bg-[#1b1b1b] px-4 h-full"
      style={{
        flex: 0.2,
      }}
    >
      {/* Top level container */}
      <div className="flex flex-col ml-10 my-10 flex-grow">
        {/* Top (User Info)*/}

        <div className="flex items-center">
          <Avatar />
          {/* User Info */}
          <div className="flex flex-col ml-4 justify-center">
            <span className="text-sm text-gray-500">Welcome,</span>
            <h1 className="font-extrabold">Hackerman</h1>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col mt-10 flex-grow space-y-4">
          <h1 className="text-xl font-extrabold text-gray-500">Account</h1>
          <Options Icon={HomeIcon} name="Home" />
          <Options Icon={MailIcon} name="Messages" />
          <Options Icon={BellIcon} name="Notifications" />
        </div>

        {/* Bottom */}
        <div className="flex">
          <h1 className="text-xl font-bold">Log Out</h1>
          <LogoutIcon className="h-7 ml-10" />
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
