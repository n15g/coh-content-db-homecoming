import { BadgeData } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const Cabalist: BadgeData = {
  type: 'accomplishment',
  key: 'cabalist',
  setTitleId: [427],
  name: 'Cabalist',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You aided the Cabal in their struggle against the loathsome Red Caps.',
  links: [
    { title: 'Cabalist Badge', href: 'https://homecoming.wiki/wiki/Cabalist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/cabalist.png',
  requirements: [
    { key: KatieHannonTaskForce.key, type: 'mission', missionKey: KatieHannonTaskForce.key },
  ],
}
