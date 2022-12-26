import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;
  gap: 10px;
`;

export const Image = styled.img`
  max-width: 400px;
  max-height: 360px;
`;

export const Content = styled.div`
  margin-left: ${({ theme }) => theme.base.margin}px;
  width: 400px;
`;

export const ContentSection = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.colors.third};
  margin: 0;
  padding: ${({ theme }) => theme.base.padding / 2}px 0;

  b {
    background: ${({ theme }) => theme.colors.third};
    padding: 0 ${({ theme }) => theme.base.padding / 2}px;
    color: ${({ theme }) => theme.colors.white};
  }

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.third};
  }
`;
