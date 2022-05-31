import styled from 'styled-components';

export const Container = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);

  padding: 0 17px;

  > div > a > svg {
    position: relative;
    z-index: 2;
  }

  @media (min-width: 1000px) {
    height: 80px;

    > div > a > svg {
      height: 40px;
    }
  }
`;

export const Wrapper = styled.div`
  width: min(100%, 716px);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: 1000px) {
    width: min(100%, 966px);
  }

  @media (min-width: 1200px) {
    width: min(100%, 1166px);
  }
`;

export const MenuIconWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-end;

  &.active {
    z-index: 4;
    position: fixed;
    width: calc(100% - 34px);

    @media (min-width: 716px) {
      width: 716px;
    }
  }
`;

export const MenuIcon = styled.button`
  width: 23px;
  height: 17px;
  background-color: transparent;

  border: 0;
  outline: none;

  position: relative;

  > div {
    width: 23px;
    height: 2.5px;
    background-color: var(--white);
    position: absolute;
    left: 0;
    transition: all 180ms ease-in;
  }

  > div:nth-child(1) {
    top: 0;
  }

  > div:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  > div:nth-child(3) {
    bottom: 0;
  }

  &.active {
    > div:nth-child(1) {
      top: 50%;
      transform: translateY(-50%) rotateZ(45deg);
    }

    > div:nth-child(2) {
      opacity: 0;
    }

    > div:nth-child(3) {
      top: 50%;
      transform: translateY(-50%) rotateZ(-45deg);
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all ease-in-out 180ms;

  &.active {
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MenuBar = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: min(100%, 447px);
  height: 100%;

  transition: transform ease-in 180ms, opacity ease-in-out 180ms;
  transform: translateX(100%);
  opacity: 0;

  overflow-y: auto;

  &.active {
    transform: translateX(0%);
    opacity: 1;

    > nav > ul > li {
      transform: translateX(0);
    }

    > nav > ul > div {
      transform: translateX(0);
    }

    > nav > a {
      transform: translateX(0);
    }
  }

  @media (min-width: 1000px) {
    position: static;
    display: flex;
    width: auto;
    justify-content: flex-end;

    transform: translateX(0%);
    opacity: 1;
  }
`;

export const Nav = styled.nav`
  height: max(500px, 100vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 36px;

  position: relative;
  float: right;
  top: 0;
  z-index: 2;

  transition: background 360ms ease-in;

  background-color: var(--black);

  > a {
    width: 100%;
    transform: translateX(27.5%);
    transition: transform ease-in-out 800ms;
  }

  @media (min-width: 1000px) {
    height: 100%;
    width: auto;

    display: flex;
    flex-direction: row;
    position: static;

    padding: 0;

    > a {
      display: none;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;

  @media (min-width: 1000px) {
    flex-direction: row;
    margin: 0;
    height: 100%;
  }
`;

export const Item = styled.li`
  display: flex;
  font-weight: bold;
  font-size: 36px;
  color: var(--white);

  padding-bottom: 25px;

  transform: translateX(30%);
  transition: transform ease-in-out 500ms;

  &:nth-child(1) {
    transform: translateX(10%);
  }

  &:nth-child(2) {
    transform: translateX(12.5%);
  }

  &:nth-child(3) {
    transform: translateX(15%);
  }

  &:nth-child(4) {
    transform: translateX(20%);
  }

  &:nth-child(5) {
    transform: translateX(22.5%);
  }

  &:nth-child(6) {
    transform: translateX(25%);
  }

  &:nth-child(n + 4) {
    font-size: 28px;
    font-weight: normal;
    padding-bottom: 28px;
  }

  &:hover {
    color: var(--green);
  }

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    height: 100%;

    transform: translateX(0%);

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(n + 4) {
      font-weight: bold;
      font-size: 16px;
      margin: 0;
      margin-left: 10px;
      padding: 0 17px;
      transform: translateX(0);
    }
  }
`;

export const Separator = styled.div`
  margin: 18px 0 40px;
  display: flex;
  position: relative;

  transform: translateX(17.5%);
  transition: transform ease-in-out 500ms;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 2px;
    background-color: var(--white);
  }

  @media (min-width: 1000px) {
    margin: 0 17px;

    ::before {
      content: '';
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 17px;
      background-color: var(--white);
    }
  }
`;
