import React, { Component, Fragment } from 'react'
import { colors, sizes } from 'config/ui'
import { reducedUserName } from 'utils/username'
import { LEAGUE_RANK_LEGEND, getTotalPoints } from 'utils/league'
import { LEAGUE_TUTORIAL_PATH } from 'routes'
import Carousel from 'components/league/carousel'
import MonthCountdown from 'components/league/month-countdown'
import {
  fundamental1DegreeMap,
  fundamental2DegreeMap,
  mediumDegreeMap,
  teacherDegreeMap,
  nonSchoolMap
} from 'utils/degrees'

import {
  StyledRow,
  ProgressBarLabel,
  ListItem,
  Infos,
  Position,
  Points,
  UserInfo,
  StyledGrid,
  ListHeader,
  LeagueInfo,
  LevelAndPoints,
  Progress,
  ProgressBar,
  LevelImage,
  ProgressBarWrapper,
  MonthCountdownWrapper,
  Month,
  RankingHistoryContainer,
  LeagueBanner,
  LeagueBannerImage,
  LeagueRedBannerImage,
  LeagueBannerTitle,
  LeagueBannerWrapper,
  UserLevelInfo,
  Ranking,
  RankingHistory,
  RankingTitle,
  HistoryTitle,
  WrapperMenu,
  MenuItem,
  LeagueInfoMobile,
  UserLevelInfoMobile,
  UnrankedLeagueInfo,
  UnrankedListCover,
  UnrankedListImage,
  UnrankedPoints,
  UnrankedText,
  LeagueBannerTextContainer,
  LeagueBannerSubtitle,
  StyledColumn
} from './LeagueBoards.styles'
import RankingHistoryCard from 'components/league/ranking-history-card'

const leagueName = 'Students League'

const menuItems = [
  { title: 'Everyone', show: 'arvoreRank' },
  { title: 'School', show: 'schoolRank' },
  { title: 'Class', show: 'classRank' }
]

const numberOfPointsToEnterTheLeague = 80

class LeagueBoards extends Component {
  state = {
    activeRank: 0,
    rankListScope: 'arvoreRank'
  }

  render() {
    const { currentPoints } = this.props
    const { activeRank } = this.state

    const reader = {
      id: 189
    }

    const entity = {
      rankingEntity:[
        {
          __typename: 'RankingReader',
          facebookUid: null,
          profileId: 512306,
          rankPosition: 1,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: '8452',
          userName: 'José Alberto'
        },
        {
          entityId: 2,
          profileId: 189,
          rankPosition: 1,
          rootName: 'Escola São Paulo',
          tier: 'diamond',
          totalTimeSpent: 6850,
          userName: 'Rafael Weiss'
        },
        {
          __typename: 'RankingReader',
          facebookUid: null,
          profileId: 512306,
          rankPosition: 3,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: 1500,
          userName: 'Mariana Gonçalves'
        },
        {
          __typename: 'RankingReader',
          facebookUid: '2218851198134002',
          profileId: 215181,
          rankPosition: 4,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: 1480,
          userName: 'Thais Oliveira'
        },
        {
          __typename: 'RankingReader',
          facebookUid: null,
          profileId: 614294,
          rankPosition: 5,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: 1400,
          userName: 'Larissa'
        }
      ],
      rankingRoot: [

        {
          __typename: 'RankingReader',
          facebookUid: null,
          profileId: 512306,
          rankPosition: 1,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: '8452',
          userName: 'José Alberto'
        },
        {
          __typename: 'RankingReader',
          facebookUid: null,
          profileId: 204828,
          rankPosition: 2,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: '7965',
          userName: 'Barbara Aguiar'
        },
        {
          __typename: 'RankingReader',
          facebookUid: null,
          profileId: 189,
          rankPosition: 3,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: '6850',
          userName: 'Rafael Weiss'
        },
        {
          __typename: 'RankingReader',
          facebookUid: '2218851198134002',
          profileId: 215181,
          rankPosition: 4,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: '5500',
          userName: 'Anderson Konzen'
        },
        {
          __typename: 'RankingReader',
          facebookUid: null,
          profileId: 614294,
          rankPosition: 5,
          rootName: 'Escola São Paulo',
          tier: null,
          totalTimeSpent: '4852',
          userName: 'Leonardo Ippolito da Silva'
        }
      ],
      degree: 'F'
    }
    const overallRanking = {
      __typename: 'Ranking',
      percentage: 0.74,
      rankingUsers: [
        {
          entityId: 2,
          profileId: 3,
          rankPosition: 1235,
          rootName: 'Santo Agostinho',
          tier: 'gold',
          totalTimeSpent: 6956,
          userName: 'Alef Xavier'
        },
        {
          entityId: 2,
          profileId: 3,
          rankPosition: 1234,
          rootName: 'Colégio Santa Marcelina',
          tier: 'gold',
          totalTimeSpent: 6900,
          userName: 'Stefany Alves'
        },
        {
          entityId: 2,
          profileId: 189,
          rankPosition: 1233,
          rootName: 'Escola São Paulo',
          tier: 'diamond',
          totalTimeSpent: 6850,
          userName: 'Rafael Weiss'
        },
        {
          entityId: 2,
          profileId: 3,
          rankPosition: 1232,
          rootName: 'Santo Agostinho',
          tier: 'diamond',
          totalTimeSpent: 6800,
          userName: 'Régis Armond Lauriano'
        },
        {
          entityId: 2,
          profileId: 3,
          rankPosition: 1231,
          rootName: 'Anglo Americano',
          tier: 'diamond',
          totalTimeSpent: 6780,
          userName: 'Ricardo Siqueira'
        }
      ],
      tier: 'diamond'
    }
    const overallRankingHistory = [
      {
        points: 89,
        month: 3,
        rankPosition: 3159,
        tier: 'bronze',
        __typename: 'RankingReaderHistory'
      },
      {
        points: 153,
        month: 4,
        rankPosition: 2658,
        tier: 'silver',
        __typename: 'RankingReaderHistory'
      },
      {
        points: 220,
        month: 5,
        rankPosition: 2153,
        tier: 'declassified',
        __typename: 'RankingReaderHistory'
      },
      {
        points: 359,
        month: 6,
        rankPosition: 1895,
        tier: 'gold',
        __typename: 'RankingReaderHistory'
      },
      {
        points: 559,
        month: 7,
        rankPosition: 1135,
        tier: 'platinum',
        __typename: 'RankingReaderHistory'
      },
      {
        points: 1320,
        month: 8,
        rankPosition: 201,
        tier: 'diamond',
        __typename: 'RankingReaderHistory'
      },
      {
        points: 1068,
        month: 9,
        rankPosition: 259,
        tier: 'waiting',
        declassified: true,
        __typename: 'RankingReaderHistory'
      },
      {
        points: 155,
        month: 10,
        rankPosition: 3159,
        tier: 'bronze',
        __typename: 'RankingReaderHistory'
      },
      {
        points: 357,
        month: 11,
        rankPosition: 2986,
        tier: 'bronze',
        __typename: 'RankingReaderHistory'
      }
    ]

    const userDontHaveEnoughPoints =
      currentPoints < numberOfPointsToEnterTheLeague
    const userWaitingToEnterLeague =
      currentPoints >= numberOfPointsToEnterTheLeague &&
      !overallRanking.rankingUsers.length

    const unrankedMenssage = userWaitingToEnterLeague ? (
      'Parabéns, você atingiu a pontuação mínima! Em alguns minutos você entrará no ranking do mês!'
    ) : (
      <Fragment>
        Você entrará no ranking da Liga deste mês quando atingir{' '}
        <span>80 pontos</span>!
      </Fragment>
    )

    const unrankedListImageSource = userWaitingToEnterLeague
      ? 'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/fruto.png'
      : 'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/semente.png'

    const rankLegend = LEAGUE_RANK_LEGEND.find(
      legend => legend.name === overallRanking.tier
    )

    const nextRankLegend =
      LEAGUE_RANK_LEGEND[
        LEAGUE_RANK_LEGEND.findIndex(
          legend => legend.name === overallRanking.tier
        ) - 1
      ] || null

    const percentage = 100 * overallRanking.percentage // 0.1 -> 10

    const userIndexInRankingEntity = entity.rankingEntity.findIndex(
      data => data.profileId.toString() === reader.id.toString()
    )

    const userIndexInRankingRoot = entity.rankingRoot.findIndex(
      data => data.profileId.toString() === reader.id.toString()
    )

    const rankingEntityFiltered = entity.rankingEntity
      .filter((user, index) => {
        if (userIndexInRankingEntity === -1) return true

        return (
          (userIndexInRankingEntity - index > -1 &&
            userIndexInRankingEntity - index <= 2) ||
          index > userIndexInRankingEntity
        )
      })
      .slice(0, 5)

    const rankingRootFiltered = entity.rankingRoot
      .filter((user, index) => {
        if (userIndexInRankingRoot === -1) return true

        return (
          (userIndexInRankingRoot - index > -1 &&
            userIndexInRankingRoot - index <= 2) ||
          index > userIndexInRankingRoot
        )
      })
      .slice(0, 5)

    const handleMenuClick = (item, index) => {
      this.setState({
        activeRank: index,
        rankListScope: item.show
      })
    }

    const renderMenuItens = () => {
      return menuItems.map((item, index) => {
        return (
          <MenuItem
            active={index === activeRank}
            onClick={() => handleMenuClick(item, index)}
            key={index}
            title={item.title}
          />
        )
      })
    }

    const renderRankedHistory = () => {
      return (
        !!overallRankingHistory.length && (
          <RankingHistoryContainer>
            <Carousel
              className="shelf-items"
              carouselSettings={{
                variableWidth: false,
                slidesToShow: 2.7,
                slidesToScroll: 2.7,
                responsive: [
                  {
                    breakpoint: sizes.xlScreen,
                    settings: {
                      slidesToShow: 2.3,
                      slidesToScroll: 2.3
                    }
                  },
                  {
                    breakpoint: sizes.lScreen,
                    settings: {
                      slidesToShow: 1.8,
                      slidesToScroll: 1.8
                    }
                  },
                  {
                    breakpoint: sizes.mScreen,
                    settings: {
                      slidesToShow: 2.6,
                      slidesToScroll: 2.6
                    }
                  },
                  {
                    breakpoint: sizes.sScreen,
                    settings: {
                      slidesToShow: 2.3,
                      slidesToScroll: 2.3
                    }
                  },
                  {
                    breakpoint: sizes.xsScreen,
                    settings: {
                      slidesToShow: 1.7,
                      slidesToScroll: 1.7
                    }
                  },
                  {
                    breakpoint: sizes.xxsScreen,
                    settings: {
                      slidesToShow: 1.4,
                      slidesToScroll: 1.4
                    }
                  }
                ]
              }}
            >
              {overallRankingHistory.map((item, index) => {
                return <RankingHistoryCard item={item} index={index} key={index} />
              })}
            </Carousel>
          </RankingHistoryContainer>
        )
      )
    }

    const renderRankedList = () => {
      const { rankListScope } = this.state
      const listData =
        rankListScope === 'arvoreRank'
          ? overallRanking.rankingUsers
          : rankListScope === 'schoolRank'
          ? rankingRootFiltered
          : rankingEntityFiltered

      return listData.map((item, index) => {
        const isCurrentUser = item.profileId.toString() === reader.id.toString()

        return (
          <ListItem key={index} featured={isCurrentUser}>
            <Infos>
              <Position>{item.rankPosition}º</Position>
              <UserInfo featured={isCurrentUser}>
                <span>{reducedUserName(item.userName)}</span>
                <span>{item.rootName}</span>
              </UserInfo>
            </Infos>
            <Points featured={isCurrentUser}>
              {getTotalPoints(item.totalTimeSpent)} <span>pts</span>
            </Points>
          </ListItem>
        )
      })
    }

    const renderUserInfo = () => {
      if (userDontHaveEnoughPoints || userWaitingToEnterLeague) {
        return (
          <Fragment>
            <UnrankedLeagueInfo userWaiting={userWaitingToEnterLeague}>
              <UnrankedPoints>
                {currentPoints} <span>pts</span>
              </UnrankedPoints>
              <UnrankedText
                userWaiting={userWaitingToEnterLeague}
                color={userWaitingToEnterLeague ? colors.black6 : colors.white}
              >
                {unrankedMenssage}
              </UnrankedText>
            </UnrankedLeagueInfo>
          </Fragment>
        )
      }
      return (
        <Fragment>
          <LeagueInfo>
            <LevelImage
              src={`https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/${overallRanking.tier.toLowerCase()}.png`}
            />
            <UserLevelInfo>
              <LevelAndPoints>
                <div>
                  {rankLegend && rankLegend.title}{' '}
                  <span>{leagueName}</span>
                </div>
                <div>
                  {currentPoints} <span>pts</span>
                </div>
              </LevelAndPoints>
              <Progress>
                <ProgressBarWrapper>
                  <ProgressBar percentage={percentage} />
                  <ProgressBarLabel>
                    <div>{rankLegend.title}</div>
                    <div>
                      {nextRankLegend ? nextRankLegend.title : '1º Place'}
                    </div>
                  </ProgressBarLabel>
                </ProgressBarWrapper>
              </Progress>
            </UserLevelInfo>
          </LeagueInfo>
          <LeagueInfoMobile>
            <UserLevelInfoMobile>
              <LevelImage
                src={`https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/${overallRanking.tier.toLowerCase()}.png`}
              />
              <LevelAndPoints>
                <div>
                  {rankLegend && rankLegend.title}{' '}
                  <span>{leagueName}</span>
                </div>
                <div>
                  {currentPoints} <span>pts</span>
                </div>
              </LevelAndPoints>
            </UserLevelInfoMobile>
            <Progress>
              <ProgressBarWrapper>
                <ProgressBar percentage={percentage} />
                <ProgressBarLabel>
                  <div>{rankLegend.title}</div>
                  <div>
                    {nextRankLegend ? nextRankLegend.title : '1º Place'}
                  </div>
                </ProgressBarLabel>
              </ProgressBarWrapper>
            </Progress>
          </LeagueInfoMobile>
        </Fragment>
      )
    }

    const renderRanking = () => {
      if (userDontHaveEnoughPoints || userWaitingToEnterLeague) {
        return (
          <Ranking>
            <RankingTitle>Ranking</RankingTitle>
            <UnrankedListCover>
              <UnrankedListImage src={unrankedListImageSource} />
              <UnrankedText
                userWaiting={userWaitingToEnterLeague}
                color={colors.black6}
              >
                {unrankedMenssage}
              </UnrankedText>
            </UnrankedListCover>
          </Ranking>
        )
      }
      return (
        <Ranking>
          <RankingTitle>Ranking</RankingTitle>
          <WrapperMenu>{renderMenuItens()}</WrapperMenu>
          {renderRankedList()}
        </Ranking>
      )
    }

    return (
      <StyledGrid>
        <StyledRow>
          <StyledColumn m={8} xl={9}>
            <ListHeader>
              {renderUserInfo()}
              <MonthCountdownWrapper>
                <Month>Finish in:</Month>
                <MonthCountdown />
              </MonthCountdownWrapper>
            </ListHeader>
          </StyledColumn>
          <StyledColumn m={8} xl={7}>
            <LeagueBannerWrapper>
              <LeagueBanner
                to={LEAGUE_TUTORIAL_PATH}
                style={{
                  marginTop: 0
                }}
              >
                <LeagueBannerTitle>
                  Understand how the league works!
                </LeagueBannerTitle>
                <LeagueBannerImage
                  src={
                    'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/muda.png'
                  }
                />
              </LeagueBanner>
              <LeagueBanner
                to={LEAGUE_TUTORIAL_PATH}
                style={{backgroundColor: colors.red1, justifyContent: 'flex-start'}}
              >
                <LeagueRedBannerImage
                  src={
                    'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/liga/detetive.png'
                  }
                />
                <LeagueBannerTextContainer>
                  <LeagueBannerTitle color={colors.red3}>
                    Stay alert!
                  </LeagueBannerTitle>
                  <LeagueBannerSubtitle>
                    Our system can detect and declassify readers out of the pattern.
                  </LeagueBannerSubtitle>
                </LeagueBannerTextContainer>
              </LeagueBanner>
            </LeagueBannerWrapper>
          </StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn m={8} xl={9}>
            {renderRanking()}
          </StyledColumn>
          <StyledColumn m={8} xl={7}>
            <RankingHistory>
              <HistoryTitle>My history</HistoryTitle>
              {renderRankedHistory()}
            </RankingHistory>
          </StyledColumn>
        </StyledRow>
      </StyledGrid>
    )
  }
}

export default LeagueBoards
