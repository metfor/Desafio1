import {
  Container,
  Content,
  Date,
  Title,
  Desc,
  LikeImg,
  LikeBox,
} from './styled';
import Like from '../../../public/like.svg';

interface newsProps {
  title?: string;
  date?: string;
  description?: string;
}
export function News({ title, date, description }: newsProps) {
  return (
    <Container>
      <Content>
        <LikeBox>
          <LikeImg src={Like} alt="like" width={20} height={20} />
        </LikeBox>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Desc>{description}</Desc>
      </Content>
    </Container>
  );
}
