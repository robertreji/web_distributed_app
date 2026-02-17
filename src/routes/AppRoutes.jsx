import { Routes, Route } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import Todo from "../pages/Todo"
import Patients from "../pages/patients"
import { Login } from "../pages/auth/login"
import ProtectedRoute from "../layouts/ProtectedRouteLayout"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Todo />} />
          <Route path="/patients" element={<Patients />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default AppRoutes