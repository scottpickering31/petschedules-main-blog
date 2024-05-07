import Image from "next/image";
import Link from "next/link";
import PetSchedulesTeam from "../../public/PetSchedulesTeam/PetSchedulesTeam.png";
import BlackButton from "@/components/Shared/Buttons/LinkButtons/BlackButton";
import OpacityButton from "@/components/Shared/Buttons/LinkButtons/OpacityButton";

function Introduction() {
  return (
 <div className="w-full flex justify-center flex-col items-center">
    <div className="flex items-center flex-col">
        <p className="mb-3">Introducing BLA BLA BLA</p>
        <h1 className="text-6xl font-bold mb-10 text-center">Pet scheduling made simple</h1>
        <h2 className="w-1/2 text-center">BLA BLA BLA offers a robust dashboard for managing clients. Effortlessly schedule pet care appointments for owners and professionals.</h2>
</div>
<div className="my-5 w-full gap-5 items-center flex justify-center">
<BlackButton href="/register" text="Sign up for free"/>
<OpacityButton href="/contact" text="Contact us"/>
</div>
    <div className="flex align-center justify-center">
        <Image src={PetSchedulesTeam} alt="PetSchedules Team" className="drop-shadow-2xl"/>
    </div>
</div>
  )
}

export default Introduction