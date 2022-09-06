import { ReactComponent as Complete } from "../img/icon-complete.svg";
function ThankYou({ className, setDone }) {
  return (
    <>
      <div className="w-full mx-auto bg-white h-full flex justify-center items-center">
        <div className={`flex flex-col items-center ${className}`}>
          <Complete />
          <div className="uppercase tracking-widest text-3xl text-[#21092F] mt-10 text-center">
            Thank You!
          </div>
          <div className="text-[#8E8593] text-lg tracking-wider my-4 text-center">
            We've added your card details
          </div>
          <button
            onClick={() => setDone(false)}
            className="mt-6 w-[90vw] sm:w-full rounded-md bg-[#21092F] capitalize py-3 text-lg text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
export default ThankYou;
