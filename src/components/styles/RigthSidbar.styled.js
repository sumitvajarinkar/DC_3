import styled from "styled-components";
export const RightSidbarContainer=styled.div`
width: 25%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background: #ddddeb;
height: 100%;
@media(max-width:${({ theme }) => theme.mobile}){
    position:fixed;
    width: 100%;
    right:-100%;
    top: 0;
    
}
`

export const UserArea=styled.div`
width: 100%;
background:#fff;
padding: 10px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const Icon= styled.div`
padding: 10px;
border-radius: 50%;
display: flex;
display: flex;
align-items: center;
justify-content: center;


`

export const CloseButton=styled.button`
background: #017bff;
padding: 10px;
border-radius: 3px;
border: none;
outline: none;
color: #fff;
font-size: 17px;
display: none;
@media(max-width:${({ theme }) => theme.mobile}){
    display: flex;
}
`