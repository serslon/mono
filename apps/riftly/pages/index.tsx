import type { ReactElement } from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <a href="/test-components">Test Components </a>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
