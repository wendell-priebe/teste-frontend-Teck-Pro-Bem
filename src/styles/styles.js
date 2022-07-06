import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;

    background : linear-gradient(to bottom right, #BDF2FD, #F2F2F2);

    img:first-child{
        position: absolute;

        top: 0;
        left: 0;

        max-width: 400px;

        transform: translateY(0px);
        animation: float 5s ease-in-out infinite;
    }

    @media(max-width:425px){
        flex-direction: column;
        
        height: auto;
        width: auto;

        img:first-child{
            position: relative;

            max-width:100%;
            padding: 20px 20px 0 20px;
        }
    }

    @media(max-width:768px) and (min-width: 425px){

        img:first-child{
            z-index: 1;
            
            animation: none;

            width: 150px;
        }
    }

    @keyframes float{
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0px);
        }
    }

`