import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const SevenTimesTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'seven-times-the-victor',
  setTitleId: [419],
  name: 'Seven Times the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have really begun to impress Mary Macomber, leader of the Cabal, by defeating her seven times. Not many outsiders have made it this far, time to prove what makes you special.`,
  acquisition: `Defeat Mary MacComber seven times during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Seven Times the Victor Badge', href: 'https://homecoming.wiki/wiki/Seven_Times_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/seven-times-the-victor.png',
}