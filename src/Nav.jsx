import './Nav.css'
import logoImg from "./assets/troll-face.png";
function Nav() {


  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo">
          <img src={logoImg} alt="" className="logoImg"/>
          <div className="logo-title">Meme Generator</div>
        </div>
        <div className="nav-sub-title">React Course - Project 3</div>
      </div>
    </>
  )
}

export default Nav
