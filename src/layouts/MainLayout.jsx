import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const MainLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col ">
      <Header />
      <div className="flex-1 flex">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout