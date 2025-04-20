import { BadgeData, zoneLink } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'
import { WelcomeToVanguard } from '../../mission/welcome-to-vanguard'
import { TheStrangeCaseOfBenjaminADecker } from '../../mission/the-strange-case-of-benjamin-a-decker'
import { DreamsOfPeaceAndActsOfWar } from '../../mission/dreams-of-peace-and-acts-of-war'
import { TheRedAndTheBlack } from '../../mission/the-red-and-the-black'
import { TheHorrorOfWar } from '../../mission/the-horror-of-war'

export const Vigilant: BadgeData = {
  type: 'accolade',
  key: 'vigilant',
  setTitleId: [2353],
  name: 'Vigilant',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You're always there when the people of Paragon City need you.` },
    { alignment: 'villain', value: `Your shadow looms over not only the Rogue Isles and Paragon City, but the entire world.` },
  ],
  acquisition: `Complete every story arc within the ${zoneLink(RiktiWarZone)}.`,
  links: [
    { title: 'Vigilant Badge', href: 'https://homecoming.wiki/wiki/Vigilant_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png' },
  ],
  requirements: [
    { key: WelcomeToVanguard.key, type: 'mission', missionKey: WelcomeToVanguard.key },
    { key: TheStrangeCaseOfBenjaminADecker.key, type: 'mission', missionKey: TheStrangeCaseOfBenjaminADecker.key },
    { key: DreamsOfPeaceAndActsOfWar.key, type: 'mission', missionKey: DreamsOfPeaceAndActsOfWar.key },
    { key: TheRedAndTheBlack.key, type: 'mission', missionKey: TheRedAndTheBlack.key },
    { key: TheHorrorOfWar.key, type: 'mission', missionKey: TheHorrorOfWar.key },
  ],
}
