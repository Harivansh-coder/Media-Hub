import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
const Header = () => {
  return (
    <header className="flex bg-[#282828] items-center justify-between space-x-5 h-16">
      {/* Logo */}
      {/* Left */}
      <div
        style={{
          flex: 0.2,
        }}
        className="flex h-full items-center bg-[#1b1b1b] p-2 px-4"
      >
        <img
          className="w-32  object-contain"
          src="assests/logo-light.png"
          alt="logo"
        />
      </div>

      {/* Middle */}
      <div
        className="text-white flex items-center p-2 px-4 justify-between"
        style={{
          flex: 0.6,
        }}
      >
        <h1 className="">Feed</h1>
        <div className="flex space-x-2">
          <div>
            <Avatar alt="logo" className="bg-red-500" />
          </div>
          <button className="btn"> Create Blend</button>
        </div>
      </div>

      {/* Right */}
      <div
        className=" flex h-full items-center p-2 px-4 bg-[#1b1b1b] text-white"
        style={{
          flex: 0.2,
        }}
      >
        <SearchIcon className="h-7 text-gray-300" />

        <input
          className="bg-transparent text-sm ml-2 outline-none p-2 w-full"
          type="text"
          placeholder="Search Topics"
        />
      </div>
    </header>
  );
};

export default Header;
