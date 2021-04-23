import { useRouter } from "next/router";
import Image from "next/image";
import { useRef } from "react";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com.gh/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200
            rounded-full shadow-lg max-w-3xl items-center"
        >
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />

          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition
                    duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon
            className="mr-3 h-6 hidden sm:inline-flex text-blue-500
                    border-l-2 pl-4 border-gray-300"
          />

          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar className='ml-auto' url="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" />

      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
