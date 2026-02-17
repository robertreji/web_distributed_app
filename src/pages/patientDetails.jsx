import { ArrowLeft, Pill, Clock, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { useYdoc } from "../store/YjsDoc"
import { useParams } from "react-router-dom"

export default function PatientDetails() {
    const [patientDetails,setPatientDetails] = useState()
    const {id:userId} = useParams()
    const yDoc= useYdoc((state)=>state.yDoc)

    const patient = yDoc.getMap("patients").get(userId)

    useEffect(()=>{
        function updateDetails()
        {
            setPatientDetails(patient?.toJSON())
        }
        updateDetails();

    },[userId])

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <div className="flex items-center gap-3 p-4">
       
        <h1 className="text-xl font-semibold"></h1>
      </div>


      <div className="mx-4 bg-blue-50 rounded-xl p-4">
        <h2 className="text-lg font-semibold">{patientDetails?.name||""}</h2>
        <div className="text-sm text-gray-600 mt-1 flex gap-4">
          <span>Bed: {patientDetails?.bedNo||""}</span>
          <span>Age:{patientDetails?.age||""}</span>
          <span>Phone: {patientDetails?.phn||"76238239"}</span>
        </div>
      </div>


      <div className="mx-4 mt-4 bg-gray-100 rounded-full p-1 flex justify-between text-sm font-medium">
        <div className="bg-white px-4 py-1 rounded-full">Medicines</div>
        <div className="px-4 py-1">Checkups</div>
        <div className="px-4 py-1">History</div>
        <div className="px-4 py-1 flex gap-1">
          Todo
          <span className="bg-red-500 text-white rounded-full px-2 text-xs">2</span>
        </div>
      </div>


      <button className="mx-4 mt-4 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2">
        <Pill size={18} />
        Add Medicine
      </button>


      <div className="mx-4 mt-4 border rounded-xl p-4">
        <h3 className="font-semibold text-lg">Metformin</h3>

        <p className="text-gray-600 text-sm mt-1">Dosage: 500mg</p>
        <p className="text-gray-600 text-sm">Frequency: Twice daily</p>
        <p className="text-gray-600 text-sm">Started: 2026-02-05</p>
      </div>


      <div className="mt-auto border-t flex justify-around py-3 text-sm text-gray-600">
        <div className="flex flex-col items-center gap-1">
          <Clock size={18} />
          Pending
        </div>

        <div className="flex flex-col items-center gap-1">
          <Users size={18} />
          Patients
        </div>
      </div>
    </div>
  )
}