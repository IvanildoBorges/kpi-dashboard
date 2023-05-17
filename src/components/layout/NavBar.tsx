import { styled } from "styled-components";
import NavItem from "../NavItem";
import { NavItemType } from "../../model/NavItemModel";

type Props = {
    funcaoToggle?: () => void,
}

// Estilo do componente
const Nav = styled.div`
    //Estilo da navbar
    &.nav-container {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        height: 100%;
        width: 100%;
        z-index: 9;
        transform: translateX(-100%);
        transition: transform .3s ease-in-out;
    }

    //Animação da navbar quando ativa
    &.nav-container.active {
        transform: translateX(0);
    }

    //Estilo da tag UL
    &.nav-container > .nav-list {
        width: 60%;
        height: 100%;
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        background-color: var(--primary-color);
        gap: 2rem;
    }

    //Estilo da tag Li
    &.nav-container > .nav-list > .item {
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-family);
        font-size: var(--font-text);
        font-weight: 400;
        color: var(--color-white);
    }

    //Estilo dos icones botões
    &.nav-container > .nav-list > .item.icons-buttons {
        position: absolute;
        bottom: 0.75rem;
        left: 0;
        width: 60%;
        display: flex;
    }

    //Estilo do logotipo
    &.nav-container > .nav-list > .item > .logo {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    //Estilo da animação de fechar navbar pelo toque fora da area do menu lateral
    &.nav-container > .close-nav {
        width: 40%;
        height: 100%;
        z-index: 8;
        background-color: rgba(0,0,0,0.2);
    }

    //versão tablet
    @media screen and (min-width: 610px) {
        //
    }
    //versão desktop
    @media screen and (min-width: 1024px) {
        //Estilo da navbar
        &.nav-container {
            display: block;
            height: 100vh;
            transform: translateX(0);
        }
        //Estilo da tag UL
        &.nav-container > .nav-list {
            width: 9rem;
            padding-top: 0;
            gap: 3rem;
        }
        //Estilo da tag Li
        &.nav-container > .nav-list > .item {
            height: 6rem;
            font-weight: 500;
        }

        //Estilo da animação de fechar navbar pelo toque fora da area do menu lateral
        &.nav-container > .close-nav {
            display: none;
        }

        //Estilo dos icones botões
        &.nav-container > .nav-list > .item.icons-buttons {
            bottom: 0;
            width: 9rem;
            height: 16rem;
            flex-direction: column;

            
            //dimensões dos icones
            .nav-item > .icon {
                width: 2rem;
                height: 2rem;
            }
        }
    }
`;

const NavBar = ({ funcaoToggle = () => {} }: Props) => {
    //Array de objetos para servir de base na geraItens()
    const items: NavItemType[] = [
        {
            titulo: "Dashboard",
            url: '/',
            icon: <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    viewBox="0 96 960 960" 
                    width="48"
                    className="icon">
                        <title>DashBoard</title>
                        <path fill="#fff" d="M510 456V246q0-12.75 8.625-21.375T540 216h270q12.75 0 21.375 8.625T840 246v210q0 12.75-8.625 21.375T810 486H540q-12.75 0-21.375-8.625T510 456ZM120 576V246q0-12.75 8.625-21.375T150 216h270q12.75 0 21.375 8.625T450 246v330q0 12.75-8.625 21.375T420 606H150q-12.75 0-21.375-8.625T120 576Zm390 330V576q0-12.75 8.625-21.375T540 546h270q12.75 0 21.375 8.625T840 576v330q0 12.75-8.625 21.375T810 936H540q-12.75 0-21.375-8.625T510 906Zm-390 0V696q0-12.75 8.625-21.375T150 666h270q12.75 0 21.375 8.625T450 696v210q0 12.75-8.625 21.375T420 936H150q-12.75 0-21.375-8.625T120 906Z"/>
                </svg>
        },
        {
            titulo: "Institutions",
            url: '/institutions',
            icon: <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    viewBox="0 96 960 960" 
                    width="48"
                    className="icon">
                        <title>Institutions</title>
                        <path fill="#fff" d="M242 815q-13 0-21.5-8.5T212 785V505q0-12 9-20.5t21-8.5q13 0 21.5 8.5T272 506v280q0 12-9 20.5t-21 8.5Zm242 0q-13 0-21.5-8.5T454 785V505q0-12 9-20.5t21-8.5q13 0 21.5 8.5T514 506v280q0 12-9 20.5t-21 8.5ZM109 935q-12 0-20.5-9T80 905q0-13 8.5-21.5T110 875h741q12 0 20.5 9t8.5 21q0 13-8.5 21.5T850 935H109Zm609-120q-13 0-21.5-8.5T688 785V505q0-12 9-20.5t21-8.5q13 0 21.5 8.5T748 506v280q0 12-9 20.5t-21 8.5ZM510 152l348 198q10 6 16 15t6 20q0 14-11 22.5t-25 8.5H116q-14 0-25-8.5T80 385q0-11 6.5-20.5T103 350l347-198q14-8 30-8t30 8Z"/>
                </svg>
        },
        {
            titulo: "KPIs",
            url: '/kpis',
            icon: <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="48" 
                    viewBox="0 96 960 960" 
                    width="48"
                    className="icon">
                        <title>KPIs</title>
                        <path fill="#fff" d="M120 936v-76l60-60v136h-60Zm165 0V700l60-60v296h-60Zm165 0V640l60 61v235h-60Zm165 0V701l60-60v295h-60Zm165 0V540l60-60v456h-60ZM120 700v-85l280-278 160 160 280-281v85L560 582 400 422 120 700Z"/>
                </svg>
        },
    ];
    //Array de svg's para servir de base na geraButtonsIcons()
    const icons: JSX.Element[] = [
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" viewBox="0 96 960 960" 
            width="48"
            className="icon">
                <title>Settings</title>
                <path fill="#fff" d="M546 976H414q-11 0-19.5-7T384 951l-16-101q-19-7-40-19t-37-25l-93 43q-11 5-22 1.5T159 836L93 719q-6-10-3-21t12-18l86-63q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535l-86-63q-9-7-12-18t3-21l66-117q6-11 17-14.5t22 1.5l93 43q16-13 37-25t40-18l16-102q2-11 10.5-18t19.5-7h132q11 0 19.5 7t10.5 18l16 101q19 7 40.5 18.5T669 346l93-43q11-5 22-1.5t17 14.5l66 116q6 10 3.5 21.5T858 472l-86 61q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l86 62q9 7 12 18t-3 21l-66 117q-6 11-17 14.5t-22-1.5l-93-43q-16 13-36.5 25.5T592 850l-16 101q-2 11-10.5 18t-19.5 7Zm-66-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"/></svg>,
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" viewBox="0 96 960 960" 
            width="48"
            className="icon">
                <title>Notifications</title>
                <path fill="#fff" d="M190 856q-13 0-21.5-8.5T160 826q0-13 8.5-21.5T190 796h54V490q0-82 49.5-148.5T424 258v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 83.5T717 490v306h53q13 0 21.5 8.5T800 826q0 13-8.5 21.5T770 856H190Zm290 120q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976Z"/></svg>,
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" viewBox="0 96 960 960" 
            width="48"
            className="icon">
                <title>Account</title>
                <path fill="#fff" d="M222 801q63-40 124.5-60.5T480 720q72 0 134 20.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142 804 111 731.159 80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.5q-54 54.5-127.129 86T479.595 976Z"/></svg>
    ]
    //Monitora para saber o último item criado
    const tamanho: number = items.length;

    //Função que verifica e ativa o item selecionado
    const verificaItemAtivo = (indexItem: number): void => {
        const listaDeItens = document.querySelectorAll('.nav-container > .nav-list > .item > .nav-item');
        
        //itera na lista para adicionar a classe que ativa o Item
        listaDeItens.forEach((item, index) => {
            if (indexItem === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    //Função que gera lista de itens LI
    const geraItens = () : JSX.Element[] => {
        return items.map((item, index) => {
            return index === 0
                ?   <li className="item" key={index}>   {/* item incial ativado */}
                        <NavItem 
                            title={item.titulo} 
                            icon={item.icon}
                            url={item.url}
                            funcao={() => {
                                verificaItemAtivo(index);
                                funcaoToggle();
                            }} />
                    </li>
                :   <li className="item" key={index}>
                        <NavItem 
                            title={item.titulo} 
                            icon={item.icon}
                            url={item.url}
                            funcao={() => {
                                verificaItemAtivo(index);
                                funcaoToggle();
                            }} />
                    </li>
        });
    }

    //Função quer gera lista de botões de icones
    const geraButtonsIcons = (): JSX.Element[] => {
        const urlString: string[] = ['/settings-account', '/notifications', '/profile'];

        return icons.map((icon, index) => {
                return (
                    <NavItem 
                        icon={icon} 
                        key={index} 
                        url={urlString[index]}
                        funcao={ () => {
                            verificaItemAtivo(tamanho+index);
                            funcaoToggle();
                        }} />
                );
        });
    }

    return (
        <Nav className="nav-container">
            <ul className="nav-list">
                <li className="item">
                    <p className="logo">LOGO</p>
                </li>
                { geraItens() }
                <li className="item icons-buttons">
                    { geraButtonsIcons() }
                </li>
            </ul>
            <div className="close-nav" onClick={funcaoToggle}></div>
        </Nav>
    )
}

export default NavBar;