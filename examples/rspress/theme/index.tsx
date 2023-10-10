import Theme from 'rspress/theme';
import { NoSSR } from 'rspress/runtime';
import { Documate } from '@documate/react';
import '@documate/react/dist/style.css';

const Layout = () => (
  <Theme.Layout
    afterNavTitle={
      <NoSSR>
        <Documate endpoint="" />
      </NoSSR>
    }
  />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
