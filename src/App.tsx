import { FC } from 'react';
import { ProductPage } from '@components/product-page/product-page';
import { Header } from '@components/header/header';

const App: FC = () => {
  return (
    <>
      <Header/>
      <ProductPage/>
    </>
  );
};

export default App;
