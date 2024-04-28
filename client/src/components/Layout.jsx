import Navbar from './Navbar'
import NavControllers from './NavControllers'

const Layout = ({ children }) => {
  return (
    <main>
      <div className=" ">
        {/* navbar */}
        <Navbar />
        {/* controller */}
        {/* <NavControllers /> */}
      </div>

      {children}
    </main>
  )
}

export default Layout
