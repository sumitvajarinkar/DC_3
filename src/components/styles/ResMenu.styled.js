import styled from 'styled-components'

export const ResponsiveMenuContainer = styled.div`
width: 100%;
position: fixed;
bottom: 0px;
left: 0px;
background: #fff;
box-shadow: 0 0 40px hsl(0deg 0% 41% / 37%);
padding:5px 10px;
display: none;
align-items: center;
justify-content: center;
border-top-left-radius: 12px;
border-top-right-radius: 12px;
@media(max-width:${({ theme }) => theme.mobile}){
 display :flex;
}
`
export const MenuBox= styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #017bff;
width: 50%;
svg{
    margin-right: 10px;
}
:nth-child(2){
    border-left: 1px solid gray;
}
`