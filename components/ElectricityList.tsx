import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function ElectricityList() {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Electricity Record</h2>
          <div>Year</div>
          <div>Country</div>
          <div>City</div>
          <div>Facility</div>
          <div>Total Consumption</div>
          <div>Renewable Energy Consumption</div>
          <div>Total Grid Consumption</div>
          <div>Total Emissions</div>
          <div>Renewable Energy Consumption</div>
          <div>Non Renewable Energy Consumption</div>
          <div>Total Energy Consumption</div>

        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editElectricityReading/123"}>
            <HiPencilAlt size ={24}/>
          </Link>
        </div>
      </div>
    </>
  );
}
