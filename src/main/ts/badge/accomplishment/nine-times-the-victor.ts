import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const NineTimesTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'nine-times-the-victor',
  setTitleId: [421],
  name: 'Nine Times the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have majorly impressed Mary Macomber, leader of the Cabal, by defeating her nine times. Your perseverence has not gone without notice, the trial nears its end.`,
  acquisition: `Defeat Mary MacComber nine times during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Nine Times the Victor Badge', href: 'https://homecoming.wiki/wiki/Nine_Times_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/nine-times-the-victor.png',
}