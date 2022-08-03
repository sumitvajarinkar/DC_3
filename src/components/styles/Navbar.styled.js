import styled from "styled-components";

export const Nav = styled.div`
padding:0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;
position: sticky;
top: 0;
`;

export const Hamburger = styled.div`
display:none;
flex-direction: column;
cursor: pointer;

span{
  height: 2px;
  width: 25px;
  background: #017bff;
  margin-bottom: 4px;
  border-radius: 5px;
}
@media (max-width:768px){
  display: flex;
}

`;

export const MenuLink=styled.a`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: #017bff;
transition: all 0.3s ease-in;
font-size: 1.2rem;
font-weight: 300;

&:hover{
  color: #0128f8;
}

`;

export const Menu=styled.a`
display:flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width:768px){
  overflow: hidden;
  flex-direction: column;
  font-size: 1.2rem;
  width: 100%;
  max-height:${({isOpen})=>(isOpen ? "300px":"0")};
}
`;

export const Logo=styled.a`
padding:1rem 0;
color:#017bff;
text-decoration: none;
font-weight: 600;
font-size: 2rem;
font-family: 'Segoe UI,sans-serif';

span{
  font-weight: 300;
  font-size: 2rem;
}
`;