import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Sidebar = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  /* background-color: #001441; */
  background-color: #6f0100;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 0 0 15px;
  border: 1px solid #bac0cb;
`;

export const Menu = styled.ul`
  list-style: none;
`;

Menu.Item = styled.li`
  a {
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
  }

  a.active {
    background-color: #c30203;
    border-radius: 3px;
    transition: 1s;
  }
`;
