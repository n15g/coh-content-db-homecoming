import { BadgeData, zoneLink } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'
import { EarningArachnosFavor } from '../../mission/earning-arachnos-favor'
import { TheOriginsOfTheSnakes } from '../../mission/the-origins-of-the-snakes'
import { SnakeUprising } from '../../mission/snake-uprising'
import { WeirdScience } from '../../mission/weird-science'
import { UnderdogsNeverWin } from '../../mission/underdogs-never-win'
import { FireAndHeist } from '../../mission/fire-and-heist'
import { HigherPurpose } from '../../mission/higher-purpose'
import { PriceOfFriendship } from '../../mission/price-of-friendship'
import { TheHeartsOfDarknessRoguesContest } from '../../mission/the-hearts-of-darkness-rogues-contest'
import { TheHeartsOfDarknessHeroicMeasures } from '../../mission/the-hearts-of-darkness-heroic-measures'
import { TheHeartsOfDarknessPriceOfVictory } from '../../mission/the-hearts-of-darkness-price-of-victory'
import { OhWretchedMan } from '../../mission/oh-wretched-man'

export const AgentOfChaos: BadgeData = {
  type: 'accolade',
  key: 'agent-of-chaos',
  setTitleId: [2344],
  name: 'Agent of Chaos',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within Mercy Island.`,
  acquisition: `Complete every story arc within ${zoneLink(MercyIsland)}.`,
  links: [
    { title: 'Agent of Chaos Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Chaos_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png',
  requirements: [
    { key: EarningArachnosFavor.key, type: 'mission', missionKey: EarningArachnosFavor.key },
    { key: TheOriginsOfTheSnakes.key, type: 'mission', missionKey: TheOriginsOfTheSnakes.key },
    { key: SnakeUprising.key, type: 'mission', missionKey: SnakeUprising.key },
    { key: WeirdScience.key, type: 'mission', missionKey: WeirdScience.key },
    { key: UnderdogsNeverWin.key, type: 'mission', missionKey: UnderdogsNeverWin.key },
    { key: FireAndHeist.key, type: 'mission', missionKey: FireAndHeist.key },
    { key: HigherPurpose.key, type: 'mission', missionKey: HigherPurpose.key },
    { key: PriceOfFriendship.key, type: 'mission', missionKey: PriceOfFriendship.key },
    { key: TheHeartsOfDarknessRoguesContest.key, type: 'mission', missionKey: TheHeartsOfDarknessRoguesContest.key },
    { key: TheHeartsOfDarknessHeroicMeasures.key, type: 'mission', missionKey: TheHeartsOfDarknessHeroicMeasures.key },
    { key: TheHeartsOfDarknessPriceOfVictory.key, type: 'mission', missionKey: TheHeartsOfDarknessPriceOfVictory.key },
    { key: OhWretchedMan.key, type: 'mission', missionKey: OhWretchedMan.key },
  ],
}
