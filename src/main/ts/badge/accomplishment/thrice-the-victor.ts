import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const ThriceTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'thrice-the-victor',
  setTitleId: [415],
  name: 'Thrice the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have sort of impressed Mary Macomber, leader of the Cabal, by defeating her three times. Your persistance has begun to leave a positive impression with the Cabal.`,
  acquisition: `Defeat Mary MacComber thrice during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Thrice the Victor Badge', href: 'https://homecoming.wiki/wiki/Thrice_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/thrice-the-victor.png',
}