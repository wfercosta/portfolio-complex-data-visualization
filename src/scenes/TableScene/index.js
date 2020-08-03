import React from 'react';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import { Container } from './styles';

function TableScene() {
  return (
    <>
      <Header title="Visão - Tabelas" />
      <Tabs>
        <Tabs.Items>
          <Tabs.Item>Rótulos</Tabs.Item>
          <Tabs.Item active>Associações</Tabs.Item>
        </Tabs.Items>
      </Tabs>
      <Container />
    </>
  );
}

export default TableScene;
