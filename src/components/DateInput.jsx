function DateInput({ error, register }) {
  return (
    <>
      <div className="flex flex-col mb-5">
        <fieldset>
          <legend className="ml-[0.05rem] mb-1 text-[#21092F] uppercase text-xs tracking-widest">
            EXP. date (mm/yy)
          </legend>
          <div className="flex w-full">
            <label htmlFor="month"></label>
            <input
              {...register("month", { required: true })}
              placeholder="MM"
              className={`rounded-[0.3rem] ${
                error ? "border-[1.4px]" : "border-[0.5px]"
              } ${
                error ? "border-[#FF5252]" : "border-[#DEDDDF]"
              } focus:border-[#600594]
           focus:border-[1.5px]  outline-none text-[#21092F] px-4 py-1 w-5/12 mr-2`}
              type="month"
              name="month"
              id="month"
            />
            <label htmlFor="year"></label>
            <input
              {...register("year", { required: true })}
              placeholder="YY"
              className={`rounded-[0.3rem] ${
                error ? "border-[1.4px]" : "border-[0.5px]"
              } ${
                error ? "border-[#FF5252]" : "border-[#DEDDDF]"
              } focus:border-[#600594]
           focus:border-[1.5px]  outline-none text-[#21092F] px-4 py-1 w-5/12 mr-3`}
              type="month"
              name="year"
              id="year"
            />
          </div>
        </fieldset>

        <div className="ml-[0.05rem] text-[#FF5252] text-[0.6rem] mt-1">
          {error}
        </div>
      </div>
    </>
  );
}
export default DateInput;
