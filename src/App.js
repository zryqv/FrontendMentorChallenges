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
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(watch("hello"));
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-violet-500 to-fuchsia-50 flex justify-center items-center">
      <div className="sm:w-[1440px]  sm:h-[900px]  flex flex-col sm:flex-row w-screen h-screen">
        <div className="sm:w-[30%] sm:bg-desktop sm:h-full bg-mobile sm:bg-no-repeat w-full h-[30%]"></div>
        <div className="w-full flex justify-center items-center h-full bg-white">
          <div className="sm:w-1/2 lg:w-[33%] w-full px-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                register={register}
                inputName={"name"}
                label="Cardholder name"
                constraints={{ required: "Can't be blank" }}
                error={errors.name && errors.name.message}
              />
              <Input
                register={register}
                inputName={"number"}
                label="Card number"
                constraints={{
                  required: "Can't be blank",
                  pattern: {
                    value: /^\d+$/,
                    message: "Wrong format, numbers only",
                  },
                }}
                error={errors.number && errors.number.message}
              />
              <div className="w-full flex relative">
                <div className="absolute top-0 left-0 ml-[0.05rem] mb-1 text-[#21092F] uppercase text-xs tracking-widest ">
                  EXP. date (MM/YY)
                </div>
                <div className="w-[23%] mr-2">
                  <Input
                    register={register}
                    inputName={"month"}
                    label=" &nbsp;"
                    constraints={{
                      required: "Can't be blank",
                      pattern: {
                        value: /^(0[1-9]|1[0-2])$/,
                        message: "Not a valid month",
                      },
                    }}
                    error={errors.month && errors.month.message}
                  />
                </div>
                <div className="w-[23%] mr-4">
                  <Input
                    register={register}
                    inputName={"year"}
                    label=" &nbsp;"
                    px="pl-3"
                    constraints={{
                      required: "Can't be blank",
                      pattern: {
                        value: /^(20[2-9]\d|2050)$/,
                        message: "Not a valid year",
                      },
                    }}
                    error={errors.year && errors.year.message}
                  />
                </div>
                <div className="w-[46.5%]">
                  <Input
                    register={register}
                    inputName={"cvc"}
                    label="CVC"
                    constraints={{
                      required: "Can't be blank",
                      pattern: {
                        value: /^\d+$/,
                        message: "Wrong format, numbers only",
                      },
                      minLength: {
                        value: 3,
                        message: "A CVC can only have 3/4 digits",
                      },
                      maxLength: {
                        value: 4,
                        message: "A CVC can only have 3/4 digits",
                      },
                    }}
                    error={errors.cvc && errors.cvc.message}
                  />{" "}
                </div>
              </div>
              <button className="w-full rounded-md bg-[#21092F] capitalize py-2 text-sm text-white">
                confirm
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Hello, World!
      <Input inputName={"hello"} label="hello" /> */}
    </div>
  );
}

export default App;
