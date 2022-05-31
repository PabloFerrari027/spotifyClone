import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../Logo';

import {
  Container,
  Wrapper,
  MenuBar,
  MenuIcon,
  Nav,
  List,
  Item,
  Overlay,
  Separator,
} from './styles';

const Navbar: React.FC = () => {
  const [isActive, setActive] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo />

        <MenuIcon
          className={`${isActive && 'active'}`}
          onClick={() => setActive((a) => !a)}
        >
          <div></div>
          <div></div>
          <div></div>
        </MenuIcon>

        <Overlay className={`${isActive && 'active'}`} />

        <MenuBar className={`${isActive && 'active'}`}>
          <Nav>
            <List>
              <Item>
                <Link href="#">Premium</Link>
              </Item>
              <Item>
                <Link href="#">Suport</Link>
              </Item>
              <Item>
                <Link href="#">Baixar</Link>
              </Item>
              <Separator />
              <Item>
                <Link href="#">Inscreva-se</Link>
              </Item>
              <Item>
                <Link href="#">Entrar</Link>
              </Item>
            </List>
            <Logo />
          </Nav>
        </MenuBar>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
