import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const EightTimesTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'eight-times-the-victor',
  setTitleId: [420],
  name: 'Eight Times the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have seriously impressed Mary Macomber, leader of the Cabal, by defeating her eight times. Your willingness to endure the harshest tribulations will prove your worth.`,
  acquisition: `Defeat Mary MacComber eight times during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Four Times the Victor Badge', href: 'https://homecoming.wiki/wiki/Eight_Times_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/eight-times-the-victor.png',
}