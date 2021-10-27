/* eslint-disable space-before-blocks */
import { Container, Content, Logo, Blog, InputSearch} from "./styles";

export function Header(){
    return(
        <>
        <Container>
            <Content>
                <Logo>Codelândia</Logo>
                <Blog>blog</Blog>
                <InputSearch placeholder="Pesquise no blog"></InputSearch>
            </Content>
        </Container>
    </>
    )
}