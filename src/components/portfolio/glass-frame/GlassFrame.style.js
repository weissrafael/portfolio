import styled, {css} from 'styled-components'
import { colors } from 'config/ui'

export const FrameContainer = styled.div`
  ${({selectedPage}) => css`
    display: flex;
    border: 4px solid ${colors.red2};
    position: relative;
    overflow: hidden;
  `}
`

export const ReflexMask = styled.div`
  ${({animate}) => css`
    display: flex;
    position: absolute;
    top: ${animate ? 0 : -100}%;
    left: ${animate ? 100 : -100}%;
    width: 80%;
    height:100%;
    transition: left 1s ease-out;
    z-index: 10;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255,255,255,1) 50%,
      transparent 100%
    );
  `}
`

export const SmallerReflexMask = styled(ReflexMask)`
  width: 50%
`