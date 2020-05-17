import styled from '@emotion/styled';
import { White, GreyBackground } from '../../ignitus-Atoms/colors';
import { SemiBold } from '../../ignitus-Atoms/fonts';
import { Heading5 } from '../../ignitus-Atoms/typography';
import { RoundedButton } from '../../ignitus-Atoms/buttons';

export const Container = styled.div`
  border-radius: 1rem;
  width: 20rem;
  margin: 2rem;
  background-color: ${White};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20rem;
  padding: 1rem;
  border-bottom: 0.2rem solid ${GreyBackground};
  overflow: hidden;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20rem;
  padding: 2rem;
`;

export const Heading = styled(Heading5)`
  font-weight: ${SemiBold};
`;

export const Button = styled(RoundedButton)`
  width: 8rem;
`;
