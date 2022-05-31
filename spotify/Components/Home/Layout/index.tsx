import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import Navbar from '../NavBar';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Footer />
    </Container>
  );
};

export default Layout;
