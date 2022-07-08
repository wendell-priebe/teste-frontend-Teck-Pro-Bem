import styled from "styled-components";
import Button from './../Button/index';

export const Container = styled.div`
    background: rgba(255, 255, 255, 0.9);
    z-index: 2;

    border-radius: 20px 5px;
    padding: 10px;

    width: 60%;
    height: 60%;

    position: fixed;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        max-width: 250px;
        max-height: 350px;

        margin-bottom: 5px;
    }

    button:first-child{
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px;
    }

    Button:last-child{
        
    }

    @media(max-width: 768px) {
        width: 90%;
        height: 90%;
    }

`