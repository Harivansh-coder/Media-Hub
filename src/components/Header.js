import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
const Header = () => {
  return (
    <header className="flex bg-blue-500 items-center justify-between p-2 space-x-5 px-4">
      {/* Brand or Logo */}
      <div className="p-2">
        <h1 className="text-base font-bold xl:text-xl text-white whitespace-nowrap space-x-2">
          Media Hub
        </h1>
      </div>

      {/* SearchBar */}

      <div className="hidden sm:flex items-center space-x-1 bg-white rounded-md p-2 shadow-lg flex-grow max-w-lg">
        <SearchIcon className="h-5" />
        <input
          type="text"
          className="h-full w-full focus:outline-none px-2 flex-grow flex-shrink"
        />
      </div>

      {/* Profile Image */}
      <div>
        <Image
          className="rounded-full"
          src="https://hackerman-links.vercel.app/jso"
          height={40}
          width={40}
          objectFit="cover"
          layout="intrinsic"
        />
      </div>
    </header>
  );
};

export default Header;
