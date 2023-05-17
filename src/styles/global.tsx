import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    /* ------------- RESET ------------- */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
    }

    html, body {
        overflow-x: hidden;
    }

    html {
        font-size: 1rem;
        scroll-behavior: smooth;
    }

    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* ------------- VARIÁVEIS DO PROJETO ------------- */
    :root {
        /* Fontes */
        --font-family: 'Poppins', sans-serif;
        --font-h1: 3.5rem;
        --font-h2: 3rem;
        --font-h3: 2.5rem;
        --font-h4: 2rem;
        --font-h5: 1.75rem;
        --font-h6: 1.5rem;
        --font-subtitle: 1.25rem;
        --font-text: 1rem;
        --font-legend: 0.875rem;

        /* Cores */
        --first-color: #004FA1;
        --second-color: #03681D;
        --color-black: #303030;
        --color-white: #FAFAFA;
        --color-background: #F6F6F6;
        --color-lightGray: #D9D9D9;
        --color-gray: #6D6C72;


        /* Variavéis */
        --theme-color: var(--color-black);
        --primary-color: var(--first-color);
        --secundary-color: var(--color-white);
        --title-color: var(--color-white);
        --subtitle-color: var(--color-lightGray);
        --text-color: var(--color-white);
        --icon-color: var(--color-white);
        --label-button: var(--color-black);
        --link-color: var(--primary-color);
        --link-color-hover: var(--secundary-color);
    }

    /* ------------- CONFIGURAÇÕES DO PROJETO ------------- */
    body {
        /* Set color */
        color: var(--text-color);
        background-color: var(--theme-color);

        /* Set size */
        min-width: 20rem;
        min-height: 100vh;

        /* Set font */
        font-family: var(--font-family);
        font-size: var(--font-text);
        font-weight: 400;
        font-style: normal;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        /* Set scrollbar */
        scrollbar-width: thin;
        scrollbar-color: var(--theme-color) var(--primary-color);

        /* Set selection */
        *::selection, h2::selection, h3::selection, h4::selection {
            background: var(--secundary-color);
            color: var(--color-white);
        }
    }
    body::-webkit-scrollbar {
        /* scrollbar width */
        width: 1rem;
    }
    body::-webkit-scrollbar-track {
        /* scrollbar background */
        background: var(--theme-color);
    }
    body::-webkit-scrollbar-thumb {
        /* scrollbar settings */
        background-color: var(--primary-color);
        border-radius: 6px;
        border: 3px solid var(--theme-color);
    }
    a:link {
        /* Set link */
        color: var(--primary-color);
    }
    a:hover {
        /* Set link hover */
        color: var(--secundary-color);
    }

    /* ------------- COR DO TEMA ATIVADO PELO BOTÃO ------------- */
    body.dark-theme {
        --theme-color: var(--color-black);
        --primary-color: var(--first-color);
        --secundary-color: var(--color-white);
        --title-color: var(--color-white);
        --subtitle-color: var(--color-lightGray);
        --text-color: var(--color-white);
        --icon-color: var(--color-white);
        --label-button: var(--color-black);
        --link-color: var(--primary-color);
        --link-color-hover: var(--secundary-color);
    }

    /* ------------- COR DO TEMA ATIVADO PELO SISTEMA ------------- */
    @media (prefers-color-scheme: light) {
        :root {
            --theme-color: var(--color-white);
            --primary-color: var(--first-color);
            --secundary-color: var(--first-color);
            --title-color: var(--color-black);
            --subtitle-color: var(--color-gray);
            --text-color: var(--color-black);
            --icon-color: var(--primary-color);
            --label-button: var(--color-white);
            --link-color: var(--primary-color);
            --link-color-hover: var(--secundary-color);
        }
    }

     /* ------------- COMPONENTES REUSÁVEIS ------------- */
    /* SECTION */
    .section {
        width: 100vw;
        height: auto;
    }
    @media screen and (min-width: 610px) {
        .section {
            width: 100%;
        }
    }

    /* CONTAINER */
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 5rem 2rem 2rem;
        margin: 0 auto;
    }
    @media screen and (min-width: 610px) {
        .container {
            flex-direction: row;
            justify-content: space-between;
            padding: 2.4rem 2.4rem 5rem;
            margin: 0 10.5rem;
        }
    }
    @media screen and (min-width: 1024px) {
        .container {
            max-width: 99.2rem;
            padding: 2.4rem 0 3rem;
        }
    }

    /* HEADER */
    .header {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        display: block;
        padding-top: 1rem;
        background-color: transparent;
    }
    @media screen and (min-width: 610px) {
        .header {
            //
        }
    }
    @media screen and (min-width: 1024px) {
        .header {
            padding-top: 0;
            bottom: 0;
        }
    }
`;

export default Global;