import React, { useRef } from 'react';

function Input({ placeholder, icon, handleInput }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInput(inputRef.current.value)
    inputRef.current.value="";
  };

  return (
    <form className="flex items-stretch gap-2" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="inline-block h-full px-3 py-1 text-gray-300 bg-transparent border-2 rounded-md grow border-primary focus:outline-none focus:ring"
        type="text"
        placeholder={placeholder}
      />
      <button
        className={`${icon} inline-block px-3 text-white rounded-md bg-primary`}
      ></button>
    </form>
  );
}

export default Input;
