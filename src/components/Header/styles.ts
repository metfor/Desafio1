import image from 'next/image';
import styled from 'styled-components';
export const Container = styled.header`
  position: relative;
  width: 100%;
  min-width: 560px;
  left: 0;
  top: 0;
  height: 15.625rem;
  background: linear-gradient(90deg, #574ae8 0%, #3ea1db 100%);
  margin-bottom: 6.25rem; ;
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.p`
  @media (min-width: 1120px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1120px) {
    font-size: 1.125rem;
    top: 3rem;
    left: 1.25rem;
  }
  font-weight: 400;
  font-family: 'Lexend Deca';
  color: white;
`;
export const Blog = styled.p`
  @media (min-width: 1120px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1120px) {
    font-size: 1.25rem;
  }
  color: white;
  line-height: 1.875rem;
  text-align: right;
  font-weight: 400;
  font-family: 'Lexend Deca';
`;
export const InputSearch = styled.input`
  @media (min-width: 1120px) {
    width: 70rem;
    margin-left: -20px;
  }
  @media (max-width: 1120px) {
    width: 90%;
    margin-left: 3%;
  }
  ::placeholder {
    color: #ffffff;
    opacity: 0.5;
    margin: auto;
  }
  ::-webkit-input-placeholder {
    padding-left: 50px;
  }
  position: absolute;
  top: 9rem;
  height: 4.0625rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  border: none;
`;
export const BoxInut = styled.div`
  position: absolute;
  margin-top: 110px;
  @media (max-width: 1120px) {
    width: 97%;
  }
`;
export const MyImage = styled(image)``;
export const BoxSearch = styled.div`
  display: flex;
  position: relative;
  margin-top: 165px;
  @media (max-width: 1120px) {
    margin-left: 40px;
  }
`;
