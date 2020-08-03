import React from 'react';
import PropTypes from 'prop-types';

import { FaTable, FaChartPie } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import { Container, Content, Menu, Sidebar } from './styles';

function DefaultLayout({ children }) {
  return (
    <Container>
      <Sidebar>
        <Menu>
          <Menu.Item>
            <NavLink activeClassName="active" to="/" exact>
              <FaChartPie size="16" color="#FFF" title="Chart View" />
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink activeClassName="active" to="/table-view">
              <FaTable size="16" color="#FFF" title="Table View" />
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DefaultLayout;
