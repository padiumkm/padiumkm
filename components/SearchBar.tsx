const SearchBar = () => {
  return (
    <div className="relative hidden sm:flex items-center w-full h-10 border-2 text-primaryText rounded-lg px-3 leading-tight">
      <div className="w-full h-full">
        <input
          className="w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm"
          placeholder="Cari Produk, jasa, atau vendor"
          type="text"
        />
      </div>
      <div className="flex items-center justify-center right-0 pl-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          color="#808C92"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
