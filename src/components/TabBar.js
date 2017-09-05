import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { navigationRoutes } from '@/routes';

const Tab = styled.nav`
  padding: 0.8rem 2.7rem;
  display: flex;
  background: ${props => props.theme.color.white};
  box-shadow: 0 0.1rem 0.5rem 0 rgba(182, 182, 182, 0.5);
`;

const TabItem = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  color: ${props => props.theme.color.gray};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;

  img {
    width: ${props => props.theme.size.icon};
    height: ${props => props.theme.size.icon};
    object-fit: scale-down;
    margin-bottom: 0.4rem;
  }
`;

const TabBar = () =>
  <Tab>
    {navigationRoutes.map(route =>
      <TabItem key={route.path} to={route.path}>
        <img src={route.icon} alt={route.text} />
        {route.text}
      </TabItem>
    )}
  </Tab>;

export default TabBar;
