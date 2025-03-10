import React, { FormEvent, useState } from "react";
import SearchIcon from "./SearchIcon";

type SearchFormProps = {
  searchHandler: (e: FormEvent, search: string) => Promise<void>;
  loading: boolean;
};

const SearchForm = ({ searchHandler, loading }: SearchFormProps) => {
  const [search, setSearch] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        searchHandler(e, search);
        setSearch("");
      }}
      className=" w-full sm:w-3/4 md:w-1/2  mx-2 items-stretch border dark:border-gray-600 border-gray-300 rounded-lg relative sm:mx-auto flex   justify-center"
    >
      <input
        type="search"
        name="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        className="bg-gray-50  flex-grow peer relative  max-w-3xl  focus:outline-gray-600 justify-self-center text-gray-900  rounded-lg   w-full p-2.5 dark:bg-gray-700  dark:border-none dark:placeholder-gray-400  dark:text-white "
        placeholder="Search ... "
      />
      <button
        disabled={loading}
        type="submit"
        className="text-white absolute right-0 border   border-slate-300 dark:border-gray-600  dark:hover:border-gray-600 hover:border-slate-500 dark:hover:bg-gray-800 peer-focus:border-gray-600 peer-focus:border-l-transparent  rounded-r-lg bg-slate-300 hover:bg-slate-500  font-medium text-sm  sm:w-auto px-3 h-full  text-center dark:bg-gray-600 "
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default React.memo(SearchForm);
