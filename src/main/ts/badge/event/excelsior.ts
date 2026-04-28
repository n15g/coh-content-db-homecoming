import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Excelsior: BadgeData = {
  type: 'event',
  key: 'excelsior',
  gameId: 'Anniversary15',
  setTitleId: [2396],
  name: 'Excelsior!',
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `You have helped celebrate the 15th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Excelsior! Badge', href: 'https://homecoming.wiki/wiki/Excelsior!_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/excelsior.png',
}
