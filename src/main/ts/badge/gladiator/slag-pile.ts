import { BadgeData } from 'coh-content-db'
import { SlagReaper } from '../accomplishment/slag-reaper'

export const SlagPile: BadgeData = {
  type: 'gladiator',
  key: 'slag-pile',
  setTitleId: [468],
  name: 'Slag Pile',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Hmm, maybe these reeking piles of junk are useful.',
  links: [
    { title: 'Slag Pile Badge', href: 'https://homecoming.wiki/wiki/Slag_Pile_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: SlagReaper.key, type: 'badge', badgeKey: SlagReaper.key },
  ],
}
