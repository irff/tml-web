import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryCard = styled(Link)`
  box-shadow: 0 0.2rem 0.4rem 0 rgba(17, 71, 82, 0.3);
  background: ${props => props.theme.color.white};
  color: ${props => props.theme.color.blue};
  padding: 1.6rem 4.8rem;
  font-weight: 700;
  text-decoration: none;

  & + & {
    margin-left: 1.2rem;
  }
`;

export default CategoryCard;
