import { Link, Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <>
        <header className="bg-indigo-500 text-white">

            <nav className="flex items-center justify-between p-4">
                <Link title="Home" to="/" className="fa-solid fa-bar nav-link"></Link>

                    <div className="flex items-center gap-2">
                        <Link title="Create post" to="/createPost" className="fa-solid fa-circle-plus nav-link"></Link>
                        <Link title="Dashboard" to="/dashboard" className="fa-solid fa-user nav-link"></Link>
                        <button title='Log out' className='fa-solid fa-right-from-bracket nav-link'></button>
                    </div>

            </nav>

        </header>

        <main>

            <Outlet/>
        
        </main>


    </>
  )
}

export default Layout

//This Home component would have been better called "Layout"