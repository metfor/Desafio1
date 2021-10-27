import styled from 'styled-components';
import Image from 'next/image';
export const Container = styled.header`
 width: 100%;
  min-width: 560px;
  left: 0;
  top:0;
 
  
  margin-bottom: 10px;
`;

export const Content = styled.div`
  @media (min-width: 1120px) {
    max-width: 1120px;
    padding: 1rem 1rem 15rem;
  }
  @media (max-width: 1120px) {
    width: 90%;
    padding: 1rem 1rem 20rem;
  }

  background: white;
  
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Date = styled.h2`
  color: #b6b6b6;
  font-family: Lexend Deca;
  font-size: 1.25rem;
  font-weight: 400;
  position: absolute;
  margin-top: 50px;
  line-height: 26px;
  @media (max-width: 1120px) {
    font-size: 1.15rem;
  }
`;
export const Title = styled.h1`
  position: absolute;
  margin-top: 130px;
  line-height: 26px;
  font-family: Lexend Deca;
  font-size: 1.625rem;
  @media (max-width: 1120px) {
    font-size: 1rem;
  }
`;
export const Desc = styled.p`
  max-width: 1110px;
  position: absolute;
  margin-top: 400px;

  line-height: 26px;
  font-family: Lexend Deca;
  font-size: 1.125rem;
  color: #b6b6b6;
  @media (max-width: 1120px) {
    font-size: 1rem;
  }
`;
export const LikeBox = styled.div`
  @media (min-width: 1120px) {
    position: relative;
    left: 1070px;
  }

  @media (max-width: 1120px) {
    margin-left: 90%;
  }
`;
export const LikeImg = styled(Image)``;
