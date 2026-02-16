import React from 'react'
import Patient from "../components/Patients.jsx"

function Patients() {
  return (
    <div className=' flex  flex-1 items-center   pt-6  flex-col gap-3 '>
      <Patient P_name={"Aarav Patel"} age={34} ward={"General"} bed_no={"G012"} allergy={false} />
      <Patient P_name={"Meera Nair"} age={58} ward={"ICU"} bed_no={"I004"} allergy={true} />
      <Patient P_name={"Rohan Sharma"} age={22} ward={"Orthopedic"} bed_no={"O019"} allergy={false} />
      <Patient P_name={"Sneha Kulkarni"} age={45} ward={"Cardiology"} bed_no={"C007"} allergy={true} />
      <Patient P_name={"Vikram Singh"} age={67} ward={"Neurology"} bed_no={"N010"} allergy={false} />
      <Patient P_name={"Ananya Das"} age={29} ward={"Maternity"} bed_no={"M005"} allergy={false} />
      <Patient P_name={"Karthik Iyer"} age={41} ward={"General"} bed_no={"G027"} allergy={true} />
      <Patient P_name={"Priya Chatterjee"} age={36} ward={"Pediatrics"} bed_no={"P014"} allergy={false} />
    </div>
  )
}

export default Patients

