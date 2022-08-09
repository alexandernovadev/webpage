import { NavLink } from "react-router-dom"

const menu_options = [
  { icon: "fa fa-user ", name: "ABOUT", to: "/" },
  { icon: "fa fa-building-o ", name: "JOBS", to: "/experience" },
  { icon: "fa fa-envelope ", name: "CONTACT", to: "/contact" },
  { icon: "fa fa-book ", name: "EDUCATION", to: "/education" },
  { icon: "fa fa-terminal ", name: "PROJECTS", to: "/projects" },
]

export const NavBar = () => {
  return (
    <>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <img
          src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
          style={{ width: "100%" }}
        />

        {menu_options.map(({ icon, name, to }) => (
          <NavLink
            key={name}
            to={to}
            className={`w3-bar-item w3-button w3-padding-large w3-black ${(
              navData
            ) => (navData.isActive ? "active" : "")}`}
          >
            <i className={`${icon} w3-xxlarge`}></i>
            <p>{name} </p>
          </NavLink>
        ))}
      </nav>

      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          {/* <a
            href="#"
            className="w3-bar-item w3-button"
            style="width:25% !important"
          >
            HOME
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button"
            style="width:25% !important"
          >
            ABOUT
          </a>
          <a
            href="#photos"
            className="w3-bar-item w3-button"
            style="width:25% !important"
          >
            PHOTOS
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button"
            style="width:25% !important"
          >
            CONTACT
          </a> */}
        </div>
      </div>
    </>
  )
}
