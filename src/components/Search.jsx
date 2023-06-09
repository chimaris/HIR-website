import React from 'react'

const Search = () => {
  return (
    <form className="max-w-sm pl-2">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-60 md:left-62 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                 type="text"
                 placeholder="Search"
                 className="py-2 w-50 pl-4 pr-12 w-[100%] text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
             />
         </div>
     </form>
  )
}

export default Search