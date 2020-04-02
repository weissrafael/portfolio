import React from 'react'
import {
  Title,
  Header,
  GoBackButton
} from './GoBackHeader.styles'
import { colors } from 'config/ui'
import FontIcon from 'components/lib/icons/FontIcon'

const GoBackHeader = ({...props}) => {
  const { bgColor, color, title, goBack } = props
  return (
    <Header bgColor={bgColor}>
      <GoBackButton onClick={goBack}>
        <FontIcon iconName={'caret-left'} color={colors.white}/>
      </GoBackButton>
      <Title color={color}>{title}</Title>
    </Header>
  )
}

export default GoBackHeader
