import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const SixTimesTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'six-times-the-victor',
  setTitleId: [416],
  name: 'Six Times the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have begun leaving an impression on Mary Macomber, leader of the Cabal, by defeating her six times. The world of the fae demands respect, and you're earning it with the Cabal.`,
  acquisition: `Defeat Mary MacComber six times during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Six Times the Victor Badge', href: 'https://homecoming.wiki/wiki/Six_Times_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/six-times-the-victor.png',
}
