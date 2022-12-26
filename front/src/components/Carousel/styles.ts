import styled, { css } from 'styled-components';
import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.base.padding / 2}px`};
  justify-content: space-between;
`;

interface IItem {
  active: boolean;
}

export const Item = styled.div<IItem>`
  ${simpleFlex};
  cursor: pointer;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.base.radius * 2}px;

  * {
    transition: 0.3s all;
  }

  > div {
    border: 3px solid transparent;
    padding: ${({ theme }) => `1px ${theme.base.padding / 2}px`};

    img {
      height: 130px;
    }
  }

  h5 {
    padding: ${({ theme }) => `0 ${theme.base.padding}px`};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.base.radius * 3}px;
    margin: ${({ theme }) => `${theme.base.margin}px 0 0`};
  }

  &:hover {
    > div {
      border-color: ${({ theme }) => theme.colors.secondary};
    }

    h5 {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${({ active }) =>
    active &&
    css`
      &:hover > div,
      > div {
        transition: 0.3s all;
        border-color: ${({ theme }) => theme.colors.red};
      }

      &:hover h5,
      h5 {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.red};
      }
    `}
`;

interface INavItems {
  disabled: boolean;
}

export const NavItems = styled.div<INavItems>`
  transition: 0.3s all;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: initial;
      pointer-events: none;
      opacity: 0.6;
    `}
`;

export const WrapperImage = styled.div``;
