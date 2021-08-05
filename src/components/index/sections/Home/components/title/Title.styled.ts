import LinedText from '@/components/ui/LinedText';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleHello = styled(motion.span)`
  opacity: 45%;
  font-weight: 300;
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.white};
`;

export const TitleFirstName = styled.span`
  font-weight: bold;
  font-size: 4rem;
  color: ${({ theme }) => theme.palette.accent};
`;
export const TitleLastName = styled.span`
  font-weight: bold;
  font-size: 4rem;
  color: ${({ theme }) => theme.palette.white};
`;
export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleAttribute = styled(LinedText)`
  font-weight: 300;
  font-size: 3rem;
  margin-top: 3rem;
  color: ${({ theme }) => theme.palette.white};
`;
