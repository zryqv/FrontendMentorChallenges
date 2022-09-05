import cardFront from "../img/bg-card-front.png";
import { ReactComponent as CardLogo } from "../img/card-logo.svg";
import { useWatch } from "react-hook-form";
function CardFront({ control, number }) {
  const name = useWatch({
    control,
    name: "name",
  });
  const month = useWatch({
    control,
    name: "month",
  });
  const year = useWatch({
    control,
    name: "year",
  });
  //   const number = useWatch({
  //     control,
  //     name: "number",
  //   });

  return (
    <>
      <div className="relative text-white w-fit">
        <img src={cardFront} alt="" />
        <CardLogo className="absolute sm:top-10 sm:left-7 sm:w-full top-3 left-3" />
        <div className="sm:text-3xl text-xl  absolute bottom-[3.2rem] sm:bottom-[4rem] text-center left-0 right-0 mx-auto w-full tracking-widest ">
          {number || "000 0000 0000 0000"}
        </div>
        <div className="px-8 flex justify-between absolute  bottom-4 text-center left-0 right-0 mx-auto w-full">
          <div className="uppercase sm:text-md text-xs">
            {name || "JANE APPLESEED"}
          </div>
          <div className="uppercase sm:text-md text-xs">
            {month || "00"}/{year || "00"}
          </div>
        </div>
      </div>
    </>
  );
}
export default CardFront;
