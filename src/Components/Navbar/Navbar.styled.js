import styled from 'styled-components'

const NavbarStyled = styled.nav`
  height:10vh;
  background-color:black;
  color:white;
  font-size:2em;
  display:flex;
  &:nth-child(1n){
    &>h1{
    margin:0px auto;
    cursor:pointer;
    }
  }
`
export default NavbarStyled;