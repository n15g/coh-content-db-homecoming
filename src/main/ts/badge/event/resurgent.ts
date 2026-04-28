import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Resurgent: BadgeData = {
  type: 'event',
  key: 'resurgent',
  gameId: 'Anniversary16',
  setTitleId: [2432],
  name: 'Resurgent',
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `You have helped celebrate the 16th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Resurgent Badge', href: 'https://homecoming.wiki/wiki/Resurgent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/resurgent.png',
}
