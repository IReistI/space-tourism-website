import { Link } from "react-router"

const DestinationNavigation = ({ destinations }) => {
  return (
    <nav>
      {destinations.map((dest) => (
        <Link key={dest.name} to={`/destination/${dest.name}`}>
          {dest.name}
        </Link>
      ))}
    </nav>
  )
}

export default DestinationNavigation
