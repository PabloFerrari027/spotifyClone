import React from 'react';

import { Container, Title, Text, Button } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <Title>Escutar muda tudo</Title>
      <Text>
        Milhões de músicas e podcasts para explorar. E nem precisa de cartão de
        crédito.
      </Text>
      <Button>Baixe o Spotify free</Button>
    </Container>
  );
};

export default Banner;
