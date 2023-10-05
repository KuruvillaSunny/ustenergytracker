export default function AddElectricityReading() {
  return (
    <form className="flex flex-col gap-3">
      <div>
        <input
          type="int64"
          placeholder="Reading Year"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="Country"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="City"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="Facility"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>
      </div>
      <div>
      <input
          type="float"
          placeholder="Total Consumption"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>KWH
      </div>
      <div>
      <input
          type="float"
          placeholder="Renewable Energy Consumption"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>KWH
      </div>
      <div>
      <input
          type="float"
          placeholder="Total Grid Consumption"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>KWH
      </div>
      <div>
      <input
          type="float"
          placeholder="Total Emissions"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>KWH
      </div>
      <div>
      <input
          type="float"
          placeholder="Renewable Energy Consumption"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>KWH
      </div>
      <div>
      <input
          type="float"
          placeholder="Non Renewable Energy Consumption"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>KWH
      </div>
      <div>
      <input
          type="float"
          placeholder="Total Energy Consumption"
          className="border border-slate-500 px-8 py-2 m-2"
        ></input>KWH
      </div>
      <div className="m-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" >Add Reading</button>
      </div>
    </form>
  );
}
