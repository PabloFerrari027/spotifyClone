import Link from 'next/link';
import React from 'react';
import Logo from '../../Logo';

import {
  Container,
  Wrapper,
  Nav,
  List,
  Title,
  Item,
  SelectCountry,
  GlobeIcon,
  SocialMedia,
  BottomFooter,
  InstagranIcon,
  TweeterIcon,
  FacebookIcon,
  Copyright,
  CopyrightIcon,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />

        <Nav>
          <List>
            <Title>Empresa</Title>
            <Item>
              <Link href="/">Sobre</Link>
            </Item>
            <Item>
              <Link href="/">Empregos</Link>
            </Item>
            <Item>
              <Link href="/">For the record</Link>
            </Item>
          </List>

          <List>
            <Title>Comunidades</Title>
            <Item>
              <Link href="/">Para Artistas</Link>
            </Item>
            <Item>
              <Link href="/">Desenvolvedores</Link>
            </Item>
            <Item>
              <Link href="/">Publicidade</Link>
            </Item>
            <Item>
              <Link href="/">Investidores</Link>
            </Item>
            <Item>
              <Link href="/">Fornecedores</Link>
            </Item>
          </List>

          <List>
            <Title>Llinks úteis</Title>
            <Item>
              <Link href="/">Suporte</Link>
            </Item>
            <Item>
              <Link href="/">Player da web</Link>
            </Item>
            <Item>
              <Link href="/">Aplicativo móvel grátis</Link>
            </Item>
          </List>
        </Nav>

        <SocialMedia>
          <Link href="/" passHref>
            <a>
              <InstagranIcon />
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <TweeterIcon />
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <FacebookIcon />
            </a>
          </Link>
        </SocialMedia>

        <SelectCountry>
          <GlobeIcon /> <span>Brasil</span>
        </SelectCountry>

        <BottomFooter>
          <Nav>
            <List>
              <Item>
                <Link href="/">Legal</Link>
              </Item>
              <Item>
                <Link href="/">Centro de Privacidade</Link>
              </Item>
              <Item>
                <Link href="/">Política de privacidade</Link>
              </Item>
              <Item>
                <Link href="/">Cookies</Link>
              </Item>
              <Item>
                <Link href="/">Sobre anúncios</Link>
              </Item>
            </List>
          </Nav>

          <Copyright>
            <CopyrightIcon />
            <span>2022 Spotify AB</span>
          </Copyright>
        </BottomFooter>
      </Wrapper>
    </Container>
  );
};

export default Footer;
