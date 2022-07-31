import styled from "styled-components";

export const MainComponent = styled.div`
width: 60%;
background:#f3f3f4;
height: 100%;
display: flex;

align-items: flex-start;
flex-direction: column;
justify-content: flex-start;
padding: 20px;

h2{
    width: 100%;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
}
`
export const CardContainer=styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
flex-wrap: wrap;
overflow-y:auto;
`
export const Card = styled.div`
width: 250px;
height: 200px;
border-radius: 12px;
padding: 15px 10px;
background: #ffff;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
color:#017bff;
margin: 10px;
`