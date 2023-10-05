import connectMongoDB from "@/libs/mongodb";
import ElectricityConsumption from "@/models/electricity";
import { NextResponse } from "next/server";


export async function PUT(request: any, { params }: any) {
    const { id } = params;
    const {
      newYear: year,
      newCountry: country,
      newCity: city,
      newFacility: facility,
      newTotalConsumption: totalConsumption,
      newRenewableEnergy: renewableEnergy,
      newTotalGridConsumption: totalGridConsumption,
      newTotalEmitions: totalEmitions,
      newRenewableEnergyConsumption: renewableEnergyConsumption,
      newNonRenewableEnergyConsumption: nonRenewableEnergyConsumption,
      newTotalEnergyConsumption: totalEnergyConsumption,
    } = await request.json();
    await connectMongoDB();
    await ElectricityConsumption.findByIdAndUpdate(id, {
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
    });
    console.log('test')
  
    return NextResponse.json({ messge: `updated` }, { status: 200 });
  }

export async function GET(request:any, {params}:any) {
  const {id}  = params;
  await connectMongoDB();
  const electricityconsumption = await ElectricityConsumption.findOne({_id: id});
  return NextResponse.json({electricityconsumption},{status:200});

}  