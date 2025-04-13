import { BadgeData, zoneLink } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'
import { PiercingTheVeil } from '../../mission/piercing-the-veil'
import { TheWarOfTheFirBolg } from '../../mission/the-war-of-the-fir-bolg'
import { HatredsHungryHeart } from '../../mission/hatreds-hungry-heart'
import { CrossingOver } from '../../mission/crossing-over'

export const StoryTeller: BadgeData = {
  type: 'accolade',
  key: 'story-teller',
  setTitleId: [2375],
  name: 'Story Teller',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within Croatoa.`,
  acquisition: `Complete every story arc within ${zoneLink(Croatoa)}.`,
  links: [
    { title: 'Story Teller Badge', href: 'https://homecoming.wiki/wiki/Story_Teller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png',
  requirements: [
    { key: PiercingTheVeil.key, type: 'mission', missionKey: PiercingTheVeil.key },
    { key: TheWarOfTheFirBolg.key, type: 'mission', missionKey: TheWarOfTheFirBolg.key },
    { key: HatredsHungryHeart.key, type: 'mission', missionKey: HatredsHungryHeart.key },
    { key: CrossingOver.key, type: 'mission', missionKey: CrossingOver.key },
  ],
}
