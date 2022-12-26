import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.header`
  ${simpleFlex};
  justify-content: center;
  flex: 1;
  padding: 0 0 ${({ theme }) => theme.base.padding / 2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.base.margin * 2}px;

  h1 {
    font-size: 28px;
    font-weight: 400;
  }
`;
