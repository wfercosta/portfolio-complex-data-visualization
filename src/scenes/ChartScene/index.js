import React from 'react';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import { Container } from './styles';

function ChartScene() {
  return (
    <>
      <Header title="Visão - Chart" />
      <Tabs>
        <Tabs.Items />
      </Tabs>
      <Container />
    </>
  );
}

export default ChartScene;
