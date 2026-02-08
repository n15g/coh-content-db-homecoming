import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const TwiceTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'twice-the-victor',
  setTitleId: [414],
  name: 'Twice the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have slightly impressed Mary Macomber, leader of the Cabal, by defeating her two times. Mary can sense the light of possibility within you, but it is yet dim.`,
  acquisition: `Defeat Mary MacComber twice during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Twice the Victor Badge', href: 'https://homecoming.wiki/wiki/Twice_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/twice-the-victor.png',
}