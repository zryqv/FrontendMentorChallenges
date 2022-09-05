function Input({ label, inputName, error, type = 'text', width = 'w-1/2' }) {
  console.log(error);
  return (
    <>
      <div className={`flex flex-col ${width} mb-5`}>
        <label
          className='ml-[0.05rem] mb-1 text-[#21092F] uppercase text-xs tracking-widest'
          htmlFor={inputName}
        >
          {label}
        </label>
        <input
          className={`rounded-[0.3rem] ${
            error ? 'border-[1.4px]' : 'border-[0.5px]'
          } ${
            error ? 'border-[#FF5252]' : 'border-[#DEDDDF]'
          } focus:border-[#600594]
           focus:border-[1.5px]  outline-none text-[#21092F] px-4 py-1`}
          type={type}
          name={inputName}
          id={inputName}
        />
        <div className='ml-[0.05rem] text-[#FF5252] text-[0.6rem] mt-1'>
          {error}
        </div>
      </div>
    </>
  );
}
export default Input;
