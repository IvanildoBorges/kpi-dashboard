import { Outlet } from "react-router-dom";
import MobileMenu from "./components/MobileMenu";
import NavBar from "./components/layout/NavBar";

function App() {

  //Função para abrir ou fechar o menu lateral
  function toggleMenu() : void {
    const activeClass: string = "active";
    //pega os elementos, caso existam no DOM
    const buttonMenu: Element | null = document.querySelector(".mobile-menu");
    const menuLateral: Element | null = document.querySelector(".nav-container");

    //Verifica se o elemento existe
    if (buttonMenu && menuLateral) {
      //adiciona ou remove estilo ativo
      buttonMenu.classList.toggle(activeClass);
      menuLateral.classList.toggle(activeClass);
    }
  }
  
  return (
    <>
      <header className='section header'>
        <MobileMenu funcao={toggleMenu}/>
        <NavBar funcaoToggle={toggleMenu} />
      </header>
      <Outlet />
    </>
  )
}

export default App
