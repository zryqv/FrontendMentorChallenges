function DateInput({ error }) {
  console.log(error);
  return (
    <>
      <div className='flex flex-col mb-5'>
        <label
          className='ml-[0.05rem] mb-1 text-[#21092F] uppercase text-xs tracking-widest'
          htmlFor='date'
        >
          EXP. date (mm/yy)
        </label>
        <div className='flex w-full'>
          <input
            className={`rounded-[0.3rem] ${
              error ? 'border-[1.4px]' : 'border-[0.5px]'
            } ${
              error ? 'border-[#FF5252]' : 'border-[#DEDDDF]'
            } focus:border-[#600594]
           focus:border-[1.5px]  outline-none text-[#21092F] px-4 py-1 w-5/12 mr-2`}
            type='moth'
            name='date'
            id='date'
          />
          <input
            className={`rounded-[0.3rem] ${
              error ? 'border-[1.4px]' : 'border-[0.5px]'
            } ${
              error ? 'border-[#FF5252]' : 'border-[#DEDDDF]'
            } focus:border-[#600594]
           focus:border-[1.5px]  outline-none text-[#21092F] px-4 py-1 w-5/12 mr-3`}
            type='month'
            name='date'
            id='date'
          />
        </div>
        <div className='ml-[0.05rem] text-[#FF5252] text-[0.6rem] mt-1'>
          {error}
        </div>
      </div>
    </>
  );
}
export default DateInput;
