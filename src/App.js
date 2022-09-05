import DateInput from "./components/DateInput";
import Input from "./components/Input";
import cardBack from "./img/bg-card-back.png";
import cardFront from "./img/bg-card-front.png";
import { ReactComponent as CardLogo } from "./img/card-logo.svg";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   name: "e.g. Jane Appleseed",
    //   number: "e.g. 1234 5678 9123 0000",
    //   month: "MM",
    //   year: "YY",
    //   CVC: "e.g. 123",
    // },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-violet-500 to-fuchsia-50 flex justify-center items-center">
      <div className="2xl:w-[1440px] sm:h-[80vh] w-screen h-screen relative">
        <div className="absolute top-32 left-32">
          <div className="relative">
            <img src={cardFront} alt="" />
            <CardLogo className="absolute top-10 left-7" />
            <div className="absolute bottom-20 text-center left-0 right-0 mx-auto w-full ">
              000 0000 0000 0000
            </div>
            <div className="px-8 flex justify-between absolute  bottom-7 text-center left-0 right-0 mx-auto w-full">
              <div className="uppercase">Jane Appleseed</div>
              <div className="uppercase">00/00</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 left-48">
          <img src={cardBack} alt="" />
        </div>
        <div className="flex flex-col sm:flex-row h-full w-full">
          <div
            className={`w-full sm:w-3/12 bg-mobile sm:bg-desktop h-[25%] sm:h-full`}
          ></div>
          <div className="w-full sm:w-9/12 flex justify-center items-center bg-white   h-[75%] sm:h-full pl-20">
            <div className=" sm:w-[33%] px-4 py-4 sm:px-0 sm:py-0">
              <form
                onSubmit={handleSubmit((data) => {
                  console.log("submitted");
                  console.log(data);
                })}
              >
                <Input
                  placeholder="e.g. Jane Appleseed"
                  register={register}
                  label="cardholder name"
                  inputName="cardholder-name"
                  error={false}
                />
                <Input
                  register={register}
                  placeholder="e.g. 1234 5678 9123 0000"
                  label="card number"
                  inputName="card-number"
                  error="Wrong format, numbers only"
                />
                <div className="flex justify-center items-center">
                  <div className="w-1/2  h-24">
                    <DateInput register={register} error={false} />
                  </div>
                  <div className="w-1/2  h-24">
                    <Input
                      register={register}
                      label="cvc"
                      inputName="cvc"
                      width="w-full"
                      error="Can't be blank"
                      placeholder="e.g. 123"
                      type="tel"
                      constraints={{ min: 3, max: 3 }}
                    />
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#21092F] capitalize py-2 text-sm text-white"
                  >
                    confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div
  //     className=' text-white h-screen w-screen flex sm:flex-row flex-col'
  //     style={{ fontSize: '18px' }}
  //   >
  //     <div
  //       className='sm:w-3/12 sm:h-full w-full'
  //       style={{ backgroundImage: `url(${bgLeft})` }}
  //     ></div>
  //     <div className='lg:w-4/12 md:2/12 sm:1/12 w-0'></div>
  //     <div className='w-full sm:7/12 md:6/12 lg:w-5/12 my-auto sm:mx-auto'>
  //       <Input
  //         label='cardholder name'
  //         inputName='cardholder-name'
  //         error={false}
  //       />
  //       <Input
  //         label='card number'
  //         inputName='card-number'
  //         error='Wrong format, numbers only'
  //       />
  //       <div className='flex w-1/2 justify-center items-center'>
  //         <div className='w-1/2  h-24'>
  //           <DateInput error={false} />
  //         </div>
  //         <div className='w-1/2  h-24'>
  //           <Input
  //             label='cvc'
  //             inputName='cvc'
  //             error={false}
  //             width='w-full'
  //             error="Can't be blank"
  //             placeholder='e.g. 123'
  //             type='tel'
  //           />
  //         </div>
  //       </div>
  //       <div className='w-1/2'>
  //         <button className='w-full rounded-md bg-[#21092F] capitalize py-2 text-sm'>
  //           confirm
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
