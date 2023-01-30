import styled from '@emotion/styled';

export const Container = styled.div`
  /* padding: 50px; */
  padding: 100px;
  background: linear-gradient(62.93deg, #97ccf0 19.68%, #5218fa 89.55%);
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #333340;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.25s linear 0s;

  &:hover,
  &:focus {
    border: 1px solid #5218fa;
    transform: scale(1.1);
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
