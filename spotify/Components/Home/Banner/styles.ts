import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--purple);
  background-image: url('https://www-growth.scdn.co/static/home/bursts-mobile.svg');
  background-position: center top 40%;
  background-repeat: no-repeat;
  background-size: 215%;

  @media (min-width: 1200px) {
    background-size: 105%;
    background-position: 100% 55%;
    height: 120vh;
  }
`;

export const Title = styled.h1`
  color: var(--green);
  font-size: 48px;
  font-family: var(--font-extraBold);
  text-align: center;
  line-height: 48px;

  padding-bottom: 16px;
  max-width: min(600px, 100%);

  @media (min-width: 480px) {
    font-size: 104px;
    line-height: 104px;
    padding-bottom: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 156px;
    line-height: 166px;
    padding-bottom: 40px;
    max-width: 100%;
  }
`;

export const Text = styled.p`
  color: var(--green);
  font-size: 16px;
  text-align: center;

  padding: 0 0 32px;
  width: min(400px, 80%);

  @media (min-width: 480px) {
    padding-bottom: 40px;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const Button = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: var(--purple);
  font-family: var(--font-bold);
  cursor: pointer;

  background-color: var(--green);
  padding: 16px 32px;
  border-radius: 34px;

  &:hover {
    transform: scale(1.05, 1.05);
  }
`;
