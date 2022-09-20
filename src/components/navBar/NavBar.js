import "./NavBar.css"
import logo from "../../assets/legLogo.png"
import { useNavigate } from "react-router-dom"

export default function NavBar(params) {
  let navigate = useNavigate()
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul className="navLinks">
          <li>
            <a href="/">Dashboard</a>
          </li>
        </ul>
      </nav>
      <a className="formSub" href="/ticketForm">
        <button
          onClick={() => {
            navigate("/ticketForm")
          }}
        >
          IT Ticket Form
        </button>
      </a>
    </>
  )
}
