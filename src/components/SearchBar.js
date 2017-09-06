import React from 'react';
import styled from 'styled-components';
import HeaderSeparator from '@/assets/header-separator.png';

const SearchBar = () =>
  <Wrapper>
    <Container>
      <SearchForm>
        <SearchInput placeholder="Cari buku atau penulis" />
        {/* <FilterButton>Filter</FilterButton> */}
      </SearchForm>
    </Container>
    <SeparatorImg src={HeaderSeparator} />
  </Wrapper>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  min-height: 1rem;
  background: ${props => props.theme.color.blue};
`;

const SeparatorImg = styled.img`
  width: 100%;
  line-height: 0;
`;

const Container = styled.div`padding: 1.6rem;`;

const SearchForm = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchInput = styled.input`
  flex: 1;
  border: 0;
  color: ${props => props.theme.color.white};
  font-size: 1.8rem;
  font-family: Cerebri;
  padding: 1.2rem;
  border-radius: ${props => props.theme.size.radius.small};
  background: ${props => props.theme.color.darkBlue};
  text-align: center;

  &::-webkit-input-placeholder {
    color: ${props => props.theme.color.white};
    opacity: 0.5;
  }

  &::-moz-placeholder {
    color: ${props => props.theme.color.white};
    opacity: 0.5;
  }

  &::-ms-input-placeholder {
    color: ${props => props.theme.color.white};
    opacity: 0.5;
  }
`;

// const FilterButton = styled.button`
//   background: ${props => props.theme.color.lightBlue};
//   border-radius: ${props => props.theme.size.radius.small};
//   color: ${props => props.theme.color.blue};
//   font-size: 1.6rem;
//   padding: 0.8rem 2.1rem;
//   font-weight: 700;
//   border: 0;
//   margin-left: 1.2rem;
// `;

export default SearchBar;
