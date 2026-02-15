import { Routes, Route } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import Todo from "../pages/Todo"
import Patients from "../pages/patients"
const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/patients" element={<Patients/>}/>
      </Routes>
    </MainLayout>
  )
}

export default AppRoutes