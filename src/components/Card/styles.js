import styled from "styled-components";

export const Cartao = styled.div`
    border-radius: 15px 5px;
    background: #3d84ed;
    /* background: #c19dff; */

    z-index: 2;

    margin: 30px;
    padding: 10px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
        margin: 10px;
    }

    img{
        margin: 10px;

        width: 200px;
        height: 300px;
    }

    @media(max-width:425px){
        margin: 10px;
        padding: 10px;

        width: 90%;
    }

`