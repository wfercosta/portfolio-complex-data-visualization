import styled, { css } from 'styled-components';

const Tabs = styled.div`
  display: block;
  margin: 20px 0 0 0;
`;

Tabs.Items = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bac0cb;
`;
Tabs.Item = styled.li`
  padding: 10px;
  margin: 0 0 0 10px;

  ${({ active }) =>
    active &&
    css`
      color: #c30203;
      font-weight: bold;
      border-bottom: 2px solid #c30203;
    `}

  ${({ active }) =>
    !active &&
    css`
      color: #bac0cb;
      font-weight: bold;
    `}
`;

export default Tabs;
