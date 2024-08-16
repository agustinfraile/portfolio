import './NavbarCnt.css';

const NavbarCnt = () => {
  return (
    <nav className='navbar_container'>
      <ul className='navbar_container_list'>
        <li className='navbar_container_list-item'>
          <a href="#inicio">Inicio</a>
        </li>
        <li className='navbar_container_list-item'>
          <a href="#sobre-mi">Sobre mi</a>
        </li>
        <li className='navbar_container_list-item'>
          <a href="#projects">Proyectos</a>
        </li>
        <li className='navbar_container_list-item'>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarCnt;