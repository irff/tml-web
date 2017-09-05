import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CategoryCard from '@/components/CategoryCard';
import BookCard from '@/components/BookCard';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <WelcomeText>Hai, Irfan!</WelcomeText>
          Jelajahi kategori buku yang kamu inginkan
        </Container>

        <Container>
          <Scrollable margin="0 -1.6rem" padding="0.2rem 1.6rem">
            <CategoryCard to="/kategori/bisnis">Bisnis</CategoryCard>
            <CategoryCard to="/kategori/bisnis">Bisnis</CategoryCard>
            <CategoryCard to="/kategori/bisnis">Bisnis</CategoryCard>
            <CategoryCard to="/kategori/bisnis">Bisnis</CategoryCard>
          </Scrollable>
        </Container>

        <Container>
          <SectionTitle>Buku Populer</SectionTitle>
          <Scrollable margin="0 -1.6rem" padding="0.2rem 1.6rem">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Scrollable>
        </Container>

        <Container>
          <SectionTitle>Buku Terbaru</SectionTitle>
          <Scrollable margin="0 -1.6rem" padding="0.2rem 1.6rem">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Scrollable>
        </Container>

        <Container>
          <SectionTitle>Buku Populer</SectionTitle>
          <Scrollable margin="0 -1.6rem" padding="0.2rem 1.6rem">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Scrollable>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`padding: 1.6rem;`;
const WelcomeText = styled.h1`margin: 0;`;
const SectionTitle = styled.h3`
  margin: 0 0 1.2rem;
  text-transform: uppercase;
  font-size: 1.6rem;
`;
const Scrollable = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  ${props => props.padding && `padding: ${props.padding};`};
  ${props => props.margin && `margin: ${props.margin};`};
`;
