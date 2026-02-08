import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const OnceTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'once-the-victor',
  setTitleId: [413],
  name: 'Once the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have barely impressed Mary Macomber, leader of the Cabal, by defeating her one time. The secretive Cabal are not so easily trusting of outsiders, but you have potential.`,
  acquisition: `Defeat Mary MacComber once during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Once the Victor Badge', href: 'https://homecoming.wiki/wiki/Once_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/once-the-victor.png',
}