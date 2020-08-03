import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChartScene, TableScene } from '~/scenes';
import DefaultLayout from '~/scenes/_layouts/DefaultLayout';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <DefaultLayout>
            <ChartScene />
          </DefaultLayout>
        </Route>
        <Route path="/table-view" exact>
          <DefaultLayout>
            <TableScene />
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
