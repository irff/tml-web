import React from 'react';
import styled from 'styled-components';

const BookCard = () =>
  <Card>
    <BookImage src="https://images-na.ssl-images-amazon.com/images/I/51gufUMfXZL.jpg" />
    <Title>Hillbilly Elegy Hillbilly</Title>
    <Subtitle>by John Donald Eager Vance</Subtitle>
  </Card>;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;

  & + & {
    margin-left: 1.2rem;
  }
`;

const BookImage = styled.img`
  width: 16rem;
  height: 24rem;
  object-fit: cover;
  box-shadow: 0 0 4px 0 rgba(159, 159, 159, 0.5);
  margin-bottom: 1.2rem;
`;

const Title = styled.strong`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.6rem;
`;

const Subtitle = styled.span`
  font-size: 1.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default BookCard;
