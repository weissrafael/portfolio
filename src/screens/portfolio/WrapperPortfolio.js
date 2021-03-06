import React, { useEffect, useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import { Curriculum } from './curriculum'
import { AboutMe } from './about-me'
import { Examples } from './examples'
import logo from 'assets/images/rw-logo.png'
import {
  Page,
  IconsContainer,
  LogoImage,
  IconsBorder,
  PageContent,
} from './WrapperPortfolio.style'
import IconButton from 'components/lib/buttons/IconButton'
import {
  CURRICULUM_PATH,
  ABOUT_ME_PATH,
  EXAMPLES_PATH,
  PORTFOLIO_PATH
} from 'routes'

export const shortAnimation = 0.5

const WrapperPortfolio = props => {
  const [iconsContainerAnimationDelay, setIconsContainerAnimationDelay] = useState(shortAnimation)
  const [iconsBorderAnimationDelay, setIconsBorderAnimationDelay] = useState(shortAnimation*2)
  const [pageContentAnimationDelay, setPageContentAnimationDelay] = useState(shortAnimation*3)
  const [removeLogo, setRemoveLogo] = useState(false)
  const [showPageContent, setShowPageContent] = useState(false)
  const [changingPages, setChangingPages] = useState(true)
  const [iconsOpacityController, setIconsOpacityController] = useState(false)
  const [triggerBorder, setTriggerBorder] = useState(false)
  const body = document.body
  let componentLocation = useLocation()
  const currentPath = componentLocation.pathname.split('/')[3]
  const [selectedPage, setSelectedPage] = useState(currentPath || '')

  useEffect(() => {
    const { history } = props
    const unlisten = history.listen((newLocation, action) => {
      if (action === 'POP') {
        setShowPageContent(false)
        location.reload()
      }
    })

    if (currentPath) {
      changeBackgroundColor(currentPath)
      cancelAnimations(currentPath)
    }
    else {
      setChangingPages(false)
      body.setAttribute('class', '')
      body.classList.add('introduction')
      setTimeout(() => {
        setIconsOpacityController(true)
      },460)
    }
    return () => {
      body.setAttribute('class', '')
      unlisten()
    }
  }, [])

  const routes = [
    {
      path: PORTFOLIO_PATH,
      component: () => {
        return <div />
      }
    },
    { path: CURRICULUM_PATH, component: Curriculum },
    { path: ABOUT_ME_PATH, component: AboutMe },
    { path: EXAMPLES_PATH, component: Examples }
  ]

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ))

  const changeBackgroundColor = page => {
    body.setAttribute('class', '')
    body.classList.add(page)
  }

  const introductionAnimation = (page, pagePath) => {
    setSelectedPage(page)
    setTriggerBorder(true)
    changeBackgroundColor(page)
    setTimeout(() => {
      setRemoveLogo(true)
    }, shortAnimation*1000)
    setTimeout(() => {
      setPageContentAnimationDelay(0)
      setIconsContainerAnimationDelay(0)
      setIconsBorderAnimationDelay(shortAnimation)
      props.history.push(pagePath)
      setShowPageContent(true)
    }, shortAnimation*3000)
  }

  const handleIconClicked = (page, pagePath) => {
    if (selectedPage === '') {
      introductionAnimation(page, pagePath)
      return
    }
    changePageAnimation(page, pagePath)
  }

  const changePageAnimation = (page, pagePath) => {
    if(page === currentPath) {
      return
    }
    setIconsBorderAnimationDelay(0)
    setIconsOpacityController(true)
    setChangingPages(true)
    setShowPageContent(false)
    setTriggerBorder(false)
    setTimeout(() => {
      changeBackgroundColor(page)
      setSelectedPage(page)
    }, shortAnimation*600)
    setTimeout(() => {
      setChangingPages(false)
      setTriggerBorder(true)
    }, shortAnimation*2600)
    setTimeout(() => {
      props.history.push(pagePath)
      setShowPageContent(true)
    }, shortAnimation*3800)
  }

  const cancelAnimations = page => {
    setIconsOpacityController(true)
    setTriggerBorder(false)
    setRemoveLogo(true)
    setPageContentAnimationDelay(0)
    setIconsContainerAnimationDelay(0)
    setIconsBorderAnimationDelay(shortAnimation)
    setShowPageContent(false)
    setSelectedPage(page)
    setTimeout(() => {
      setChangingPages(false)
      setTriggerBorder(true)
    }, shortAnimation*1000)
    setTimeout(() => {
      setShowPageContent(true)
      window.scrollTo(0, 0)
    }, shortAnimation*3000)
  }

  return (
    <Page selectedPage={selectedPage}>
      {!removeLogo && <LogoImage src={logo} selectedPage={selectedPage} />}
      <IconsContainer selectedPage={selectedPage} changingPages={changingPages} animationDelay={iconsContainerAnimationDelay} opacityController={iconsOpacityController}>
        <IconButton
          iconName={'clipboard-content'}
          onClick={() => handleIconClicked('curriculum', CURRICULUM_PATH)}
        />
        <IconButton
          iconName={'user'}
          onClick={() => handleIconClicked('about-me', ABOUT_ME_PATH)}
        />
        <IconButton
          iconName={'browser-code'}
          onClick={() => handleIconClicked('examples', EXAMPLES_PATH)}
        />
      </IconsContainer>
      <IconsBorder selectedPage={selectedPage} expand={triggerBorder} animationDelay={iconsBorderAnimationDelay} />
      <PageContent showPageContent={showPageContent} animationDelay={pageContentAnimationDelay}>
        <Switch>{routeComponents}</Switch>
      </PageContent>
    </Page>
  )
}

export default WrapperPortfolio
