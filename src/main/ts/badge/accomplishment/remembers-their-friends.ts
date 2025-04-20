import { BadgeData, contactLink, missionLink } from 'coh-content-db'
import { VincentRoss } from '../../contact/vincent-ross'
import { SweepsWeekHeroNameVsTheRogueIsles } from '../../mission/sweeps-week-heroname-vs-the-rogue-isles'

export const RemembersTheirFriends: BadgeData = {
  type: 'accomplishment',
  key: 'remembers-their-friends',
  setTitleId: [2268],
  name: 'Remembers Their Friends',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Vincent Ross was kidnapped by the Family after they found out he had past dealings with you. However, you beat the Family down and rescued Vincent Ross, showing the Rogue Isles that you remember your friends.',
  acquisition: `Rescue ${contactLink(VincentRoss)} in the "Part Four: All in the Family" mission of the ${missionLink(SweepsWeekHeroNameVsTheRogueIsles)} story arc.`,
  notes: `${contactLink(VincentRoss)} will only be present if you have previously completed his story arc.`,
  links: [
    { title: 'Remembers Their Friends Badge', href: 'https://homecoming.wiki/wiki/Remembers_Their_Friends_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png',
  requirements: [
    { key: SweepsWeekHeroNameVsTheRogueIsles.key, type: 'mission', missionKey: SweepsWeekHeroNameVsTheRogueIsles.key },
  ],
}
