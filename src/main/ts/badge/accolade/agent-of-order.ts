import { BadgeData } from 'coh-content-db'
import { WhatWasLost } from '../../mission/what-was-lost'
import { NoMoreFears } from '../../mission/no-more-fears'
import { ReasonToFight } from '../../mission/reason-to-fight'
import { LayDownYourBurdens } from '../../mission/lay-down-your-burdens'
import { TheShiningStarsANewDayDawning } from '../../mission/the-shining-stars-a-new-day-dawning'
import { TheShiningStarsBigLeagues } from '../../mission/the-shining-stars-big-leagues'
import { TheShiningStarsWithFriendsLikeThese } from '../../mission/the-shining-stars-with-friends-like-these'

export const AgentOfOrder: BadgeData = {
  type: 'accolade',
  key: 'agent-of-order',
  setTitleId: [2352],
  name: 'Agent of Order',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Without heroes like you the world would fall into chaos and despair.` },
    { alignment: 'villain', value: `You leave nothing but chaos and destruction in your wake!` },
  ],
  links: [
    { title: 'Agent of Order Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Order_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png',
  requirements: [
    { key: WhatWasLost.key, type: 'mission', missionKey: WhatWasLost.key },
    { key: NoMoreFears.key, type: 'mission', missionKey: NoMoreFears.key },
    { key: ReasonToFight.key, type: 'mission', missionKey: ReasonToFight.key },
    { key: LayDownYourBurdens.key, type: 'mission', missionKey: LayDownYourBurdens.key },
    { key: TheShiningStarsANewDayDawning.key, type: 'mission', missionKey: TheShiningStarsANewDayDawning.key },
    { key: TheShiningStarsBigLeagues.key, type: 'mission', missionKey: TheShiningStarsBigLeagues.key },
    { key: TheShiningStarsWithFriendsLikeThese.key, type: 'mission', missionKey: TheShiningStarsWithFriendsLikeThese.key },
  ],
}
