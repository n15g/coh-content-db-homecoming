import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const FourTimesTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'four-times-the-victor',
  setTitleId: [416],
  name: 'Four Times the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have started to impress Mary Macomber, leader of the Cabal, by defeating her four times. Many have turned back at this point, but you are not simply one of the many.`,
  acquisition: `Defeat Mary MacComber four times during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Four Times the Victor Badge', href: 'https://homecoming.wiki/wiki/Four_Times_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/four-times-the-victor.png',
}
