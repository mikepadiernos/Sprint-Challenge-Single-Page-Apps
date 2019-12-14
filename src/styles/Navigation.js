import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #98CAE3;
    border-radius: 4px;
    overflow: hidden;
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        justify-content: space-around;
    }
    ul li {
        width: 50%;
    }
    ul li a {
        display: block;
        color: #fff;
        text-decoration: none;
        font-size: 1.25rem;
        padding: 15px 0;
        width: 100%;
        text-align: center;
    }
    ul li a:hover {
        background-color: #2F6580;
    }
`;
