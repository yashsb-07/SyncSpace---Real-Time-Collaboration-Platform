import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex gap-6">

        <Link
          to="/"
          className="hover:text-gray-200"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="hover:text-gray-200"
        >
          About
        </Link>

      </div>
    </nav>
  )
}

export default Navbar