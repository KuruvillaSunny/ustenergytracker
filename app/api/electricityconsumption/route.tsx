import connectMongoDB from "@/libs/mongodb";
import ElectricityConsumption from "@/models/electricity";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const {
    year,
    country,
    city,
    facility,
    totalConsumption,
    renewableEnergy,
    totalGridConsumption,
    totalEmitions,
    renewableEnergyConsumption,
    nonRenewableEnergyConsumption,
    totalEnergyConsumption,
  } = await request.json();

  await connectMongoDB();
  await ElectricityConsumption.create({
    year,
    country,
    city,
    facility,
    totalConsumption,
    renewableEnergy,
    totalGridConsumption,
    totalEmitions,
    renewableEnergyConsumption,
    nonRenewableEnergyConsumption,
    totalEnergyConsumption});

    return NextResponse.json({messgae: "Electricity Reading Added Succesfully"}, {status: 201})
}


export async function GET(){
    await connectMongoDB();
    const electricityreadings = await ElectricityConsumption.find()
    return NextResponse.json({electricityreadings})
}

export async function DELETE(request:any) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await ElectricityConsumption.findByIdAndDelete(id);
    return NextResponse.json({message: `${id} Record Deleted`}, {status:200})    
}