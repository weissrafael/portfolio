import React, { useState, useEffect } from 'react'
import { Container } from 'components/admin/user-management-panel/grid'
import { Title } from 'components/lib/titles'

import {
  WrapperStyle,
  BodyStyle,
  InputStyle,
  FinishButtons,
  RowStyle,
  LeftColumnStyle,
  RightColumnStyle,
  ResetPasswordButton,
  IconButtonStyled,
  PagedListHeader,
  ColumnStyle,
  AlertRecovery,
  LabelAccordionStyle,
  AccessCodeLabel,
  InputSearchStyle,
  ContainerAccordionMenu
} from 'styles/common/Common.styles'
import { colors } from 'config/ui'
import Button from 'components/lib/buttons/Button'
import ShowTags from 'components/admin/user-management-panel/show-tags'
import PagedList from 'components/admin/user-management-panel/paged-list/PagedList'
import { HeaderEdit } from 'components/admin/user-management-panel/header'
import { AccordionMenu } from 'components/admin/user-management-panel/accordion-menu'
import Select from 'components/lib/selects/Select'

const mockedLinked = ['Unity norte 01']
const mockedUnlinked = [
  'Unity norte 01 - 01',
  'Unity norte 01 - 02',
  'Unity norte 01 - 03',
  'Unity norte 01 - 04',
  'Unity norte 01 - 05',
  'Unity norte 01 - 06'
]

const DirectorsEditScreen = props => {
  const [nameInputValue, setNameInputValue] = useState('')
  const [emailInputValue] = useState('')
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [linkedItems, setLinkedItems] = useState([])
  const [unlinkedItems, setUnlinkedItems] = useState([])
  const [userType, setUserType] = useState('')

  useEffect(() => {
    const { id } = props.match.params

    // from the backend
    if (id && id !== ':id') {
      //edit mode
      setLinkedItems(mockedLinked) // linked items
      setUnlinkedItems(mockedUnlinked) //unlinked items
    } else {
      //create mode
      //create mode
      setUnlinkedItems(mockedUnlinked) //unlinked items
    }

    if (notificationOpen) {
      setTimeout(() => {
        setNotificationOpen(false)
      }, 3000)
    }
  }, [notificationOpen])

  const handleNameChange = evt => {
    setNameInputValue(evt.target.value)
  }

  const handleEmailChange = evt => {
    setNameInputValue(evt.target.value)
  }

  const resetPassword = () => {
    setNotificationOpen(true)
  }

  const addLinkedItem = index => {
    const newLinkedItems = [...linkedItems]
    const newUnlinkedItems = unlinkedItems.filter((item, itemIndex) => {
      if (index !== itemIndex) {
        return item
      } else {
        newLinkedItems.push(item)
      }
    })
    setLinkedItems(newLinkedItems)
    setUnlinkedItems(newUnlinkedItems)
  }

  const removeLinkedItem = index => {
    const newUnlinkedItems = [...unlinkedItems]
    const newLinkedItems = linkedItems.filter((item, itemIndex) => {
      if (index !== itemIndex) {
        return item
      } else {
        newUnlinkedItems.push(item)
      }
    })
    setLinkedItems(newLinkedItems)
    setUnlinkedItems(newUnlinkedItems)
  }

  const handleSearchInput = () => {
    console.log('search')
  }

  const handleSelectValue = item => {
    setUserType(item)
  }

  return (
    <Container>
      <WrapperStyle>
        <HeaderEdit title={nameInputValue} />
        <BodyStyle>
          <AlertRecovery open={notificationOpen}>
            E-mail enviado para caio.avila@arvoreeducacao.com.br
          </AlertRecovery>
          <InputStyle
            id={'directorsName'}
            placeholder="Nome completo"
            value={nameInputValue}
            onChange={handleNameChange}
            style={{ marginBottom: 50 }}
          />
          <AccessCodeLabel>
            <h3>C??digo de acesso</h3>
            <h2>CDA8236</h2>
          </AccessCodeLabel>
          <AccordionMenu text="Outras alternativas de acesso">
            <ContainerAccordionMenu>
              <LabelAccordionStyle>E-mail e senha</LabelAccordionStyle>
              <RowStyle style={{ marginBottom: 50 }}>
                <LeftColumnStyle sm={7.5} style={{ padding: 0, margin: 16 }}>
                  <InputStyle
                    id={'directorsEmail'}
                    style={{ marginBottom: 0 }}
                    placeholder="E-mail"
                    value={emailInputValue}
                    onChange={handleEmailChange}
                  />
                </LeftColumnStyle>
                <RightColumnStyle sm={4.5} style={{ padding: 0, margin: 0 }}>
                  <ResetPasswordButton
                    text="Redefinir senha"
                    bgColor={colors.purple3}
                    bgColorHover={colors.purple3Dark}
                    color={colors.white}
                    textColorHover={colors.white}
                    iconName="mail"
                    onClick={resetPassword}
                  />
                </RightColumnStyle>
              </RowStyle>

              <LabelAccordionStyle>
                Identificador e senha p??blica
              </LabelAccordionStyle>
              <RowStyle style={{ marginBottom: 50 }}>
                <LeftColumnStyle sm={7.5} style={{ padding: 0, margin: 16 }}>
                  <InputStyle
                    id={'identifier'}
                    style={{ marginBottom: 0 }}
                    placeholder="Identificador"
                    value={'caio.avila'}
                  />
                </LeftColumnStyle>
                <RightColumnStyle sm={4.5} style={{ padding: 0, margin: 0 }}>
                  <InputStyle
                    id={'publicKey'}
                    style={{ marginBottom: 0 }}
                    placeholder="Senha p??blica"
                    value={'arvore12345'}
                  />
                </RightColumnStyle>
              </RowStyle>
            </ContainerAccordionMenu>
          </AccordionMenu>
          <AccordionMenu text="Responsabilidades">
            <ContainerAccordionMenu>
              <LeftColumnStyle style={{ padding: 0, margin: 0 }}>
                <RowStyle
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: -20,
                    paddingLeft: 16
                  }}
                >
                  <ShowTags
                    tags={linkedItems}
                    label="Diretor respons??vel pelas unidades"
                    removeTag={removeLinkedItem}
                    style={{ minHeight: 108 }}
                  />
                  <PagedListHeader style={{ width: '100%' }}>
                    <ColumnStyle sm={6}>
                      <Title
                        text="Classs da unidade"
                        size={5}
                        sizeMobile={5}
                        textAlign="left"
                        style={{ color: colors.black5, margin: 0 }}
                      />
                    </ColumnStyle>
                    <ColumnStyle sm={6}>
                      <InputSearchStyle
                        value={''}
                        onChange={handleSearchInput}
                        placeholder="Buscar turmas"
                      />
                    </ColumnStyle>
                  </PagedListHeader>
                  <PagedList
                    items={unlinkedItems}
                    onItemClicked={addLinkedItem}
                    emptyLabel="unidades"
                  />
                </RowStyle>
              </LeftColumnStyle>
            </ContainerAccordionMenu>
          </AccordionMenu>
          <AccordionMenu text="Informa????es secund??rias" haveBorderBottom>
            <ContainerAccordionMenu>
              <LeftColumnStyle>
                <Select
                  text={userType}
                  items={['Admin', 'Professor']}
                  onChange={handleSelectValue}
                  maxWidth={620}
                  label="Tipo de usu??rio"
                  activeSelectButton={userType}
                  labelColor={colors.black3}
                  dropdownStyle={{
                    top: 43,
                    width: 556
                  }}
                  style={{
                    borderColor: colors.black3,
                    color: colors.black5
                  }}
                />
                <AlertRecovery open={true} color="#595A5C" bgColor="#FFF5F1">
                  Esses dados podem ser importantes para recupera????o de senha
                </AlertRecovery>
                <RowStyle>
                  <LeftColumnStyle sm={8}>
                    <InputStyle
                      id={'secondaryEmail'}
                      style={{ marginBottom: 0 }}
                      placeholder="E-mail secund??rio"
                      value={''}
                    />
                  </LeftColumnStyle>
                  <RightColumnStyle sm={4}>
                    <InputStyle
                      id={'phoneNumber'}
                      style={{ marginBottom: 0 }}
                      placeholder="N??mero celular"
                      value={''}
                    />
                  </RightColumnStyle>
                </RowStyle>
              </LeftColumnStyle>
            </ContainerAccordionMenu>
          </AccordionMenu>

          <FinishButtons>
            <IconButtonStyled
              text="Cancel"
              color={colors.black4}
              iconName=""
              style={{ border: 'none' }}
              onClick={() => console.log('cancel')}
            />
            <Button
              iconName="add"
              text="Save"
              primary
              onClick={() => console.log('save')}
              iconSize={16}
              style={{
                width: 80,
                height: 40,
                marginLeft: 8
              }}
            />
          </FinishButtons>
          <div style={{ height: 56 }} />
        </BodyStyle>
      </WrapperStyle>
    </Container>
  )
}

export default DirectorsEditScreen
