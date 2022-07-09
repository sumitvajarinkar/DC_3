import styled from 'styled-components';

export const Navbar= styled.div`
height: 100vh;
width: 90px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Icon=styled.div`
padding: 10px;
border-radius: 6px;
display: flex;
align-items:center;
justify-content: center;
color: #6f7174;
font-size: 24px;
transition: all 0.3s ease-in-out ;

&:hover{
    background:#6f7174;
    background: #d6d9dc;
    transition: all 0.3s ease-in-out ;
}
`