import styled, { css } from 'styled-components';
import {
  FaGlobeAmericas,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaRegCopyright,
} from 'react-icons/fa';

export const Container = styled.footer`
  background-color: var(--black);
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: min(100%, 986px);
  height: 100%;
  padding: 50px 15px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 50px 40px 0;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-areas:
      'logo nav social'
      'country country country'
      'bottomFooter bottomFooter bottomFooter';
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto;
    gap: 0 50px;

    > a {
      grid-area: logo;

      > svg {
        height: 40px;
      }
    }
  }
`;

export const Nav = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 990px) {
    margin-top: 0;
    grid-area: nav;
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-family: var(--font-extraBold);
  font-size: 14px;
  color: var(--gray);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 22px;
  }

  @media (min-width: 990px) {
    font-size: 11px;
  }
`;

export const Item = styled.li`
  color: var(--white);
  font-size: 16px;
  padding-bottom: 18px;

  &:hover {
    color: var(--green);
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 990px) {
    font-size: 12px;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;

  > a {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-gray);
    border-radius: 50%;

    &:not(:first-child) {
      margin-left: 15px;
    }
  }

  @media (min-width: 990px) {
    margin-top: 0;
  }
`;

export const SelectCountry = styled.div`
  color: var(--white);
  font-size: 11px;
  font-family: var(--font-regular);
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  grid-area: country;
`;

export const GlobeIcon = styled(FaGlobeAmericas)`
  margin-right: 8px;
`;

const iconCss = css`
  font-size: 24px;
  color: var(--white);
`;

export const InstagranIcon = styled(FaInstagram)`
  ${iconCss}
`;

export const TweeterIcon = styled(FaTwitter)`
  ${iconCss}
`;

export const FacebookIcon = styled(FaFacebookF)`
  ${iconCss}
`;

export const BottomFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  grid-area: bottomFooter;

  @media (min-width: 990px) {
    margin-top: 10px;
  }

  > nav {
    width: 100%;
    margin-top: 0;
  }

  > nav > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }
  }

  > nav > ul > li {
    font-size: 11px;
    margin-right: 20px;
    color: var(--gray);

    @media (min-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const Copyright = styled.div`
  color: var(--gray);
  font-size: 12px;
  white-space: nowrap;
`;

export const CopyrightIcon = styled(FaRegCopyright)`
  margin-right: 10px;
`;
