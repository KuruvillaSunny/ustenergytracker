import mongoose, { Schema } from "mongoose";

const electricitySchema = new Schema(
  {
    year: String,
    country: String,
    city: String,
    facility: String,
    totalConsumption: Number,
    renewableEnergy: Number,
    totalGridConsumption: Number,
    totalEmitions: Number,
    renewableEnergyConsumption: Number,
    nonRenewableEnergyConsumption: Number,
    totalEnergyConsumption: Number,
  },
  {
    timestamps: true,
  }
);

const ElectricityConsumption =
  mongoose.models.ElectricityConsumption ||
  mongoose.model("ElectricityConsumption", electricitySchema);
export default ElectricityConsumption;