import styled from "styled-components";
export const SidebarComponent=styled.div`
width: 15%;
background: #017bff;
height: 100vh;
z-index: 10;
color: #fff;
display: flex;
flex-direction: column;

align-items: flex-start;
justify-content: space-between;
padding: 5px 10px;
div{
    width: 100%;
}
`
export const Icon=styled.div`
width: 100%;
padding: 0px 5px;
border-radius: 6px;
margin:10px 0px;
color: #fff;
display: flex;
align-items: center;
justify-content:flex-start;
background: ${({active})=>active?'#0128f8':'none'};
p{
    margin-left: 10px;
    line-height: 1;
}
`