import { styled } from "styled-components";

type Props = {
    classe?: string,
    children: JSX.Element[] | JSX.Element
}

const HeaderContent = styled.div`
    &.header {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        display: block;
        padding-top: 1rem;
        background-color: transparent;
    }
    @media screen and (min-width: 610px) {
        &.header {
            //
        }
    }
    @media screen and (min-width: 1024px) {
        &.header {
            padding-top: 0;
            bottom: 0;
        }
    }
`;

const Header = ({ classe = '', children }: Props) => {
    return (
        <HeaderContent className={"header "+classe}>{children}</HeaderContent>
    );
}

export default Header;