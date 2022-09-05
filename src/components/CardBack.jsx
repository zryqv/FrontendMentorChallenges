import cardBack from "../img/bg-card-back.png";
import { useWatch } from "react-hook-form";
function CardBack({ control }) {
  const cvc = useWatch({
    control,
    name: "cvc",
  });

  //   const number = useWatch({
  //     control,
  //     name: "number",
  //   });

  return (
    <>
      <div className="relative text-white w-fit">
        <img src={cardBack} alt="" />
        <div className="sm:text-lg absolute text-xs bottom-[4.6rem] right-11  text-center sm:bottom-[6.9rem] sm:right-16  tracking-widest ">
          {cvc || "000"}
        </div>
      </div>
    </>
  );
}
export default CardBack;
