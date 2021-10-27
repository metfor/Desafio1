import styled from 'styled-components';
export const Container = styled.header`
  position: absolute;
  width: 100%;
  min-width: 560px;
  left: 0;
  top:0;
  height: 15.625rem;
  background: linear-gradient(90deg, #574AE8 0%, #3EA1DB 100%);
;

`;
export const Content = styled.div`
 
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
 
  
`
export const Logo =styled.p`
  @media (min-width: 1120px) {
    font-size:1.5rem;
  }
  @media(max-width:1120px){
    font-size: 1.125rem;
    top:3rem;
    left:1.25rem;
 }
  font-weight:400;
  font-family:"Lexend Deca" ;
  color:white;
`
export const Blog=styled.p`
  @media (min-width: 1120px) {
 
  font-size:1.5rem;
  
  }
  @media(max-width:1120px){
    font-size:1.25rem;
 }
 color:white;
  line-height: 1.875rem;
  text-align: right;
  font-weight:400;
  font-family:"Lexend Deca" ;
`
export const InputSearch = styled.input`
@media (min-width: 1120px) {

width: 69rem;

}
@media(max-width:1120px){
    width: 90%;
 }
  position: absolute;
  top:9rem;
  height:4.0625rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  border:none;
  color:white;
`