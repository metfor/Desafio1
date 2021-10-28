/* eslint-disable space-before-blocks */
import {
  Container,
  Content,
  Logo,
  Blog,
  InputSearch,
  BoxInut,
  MyImage,
  BoxSearch,
} from './styles';

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <Logo>Codelândia</Logo>
          <Blog>blog</Blog>
          <BoxInut>
            <BoxSearch>
              <MyImage
                className="img"
                src="/../public/search.svg"
                alt="search"
                width="23,44"
                height="23,44"
              />
            </BoxSearch>
            <InputSearch placeholder="Pesquise no blog"></InputSearch>
          </BoxInut>
        </Content>
      </Container>
    </>
  );
}
