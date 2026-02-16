import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const MainLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <Header />
      <div className="flex-1 flex overflow-auto ">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout