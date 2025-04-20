import { BadgeData, zoneLink } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'

export const Laureate: BadgeData = {
  type: 'accomplishment',
  key: 'laureate',
  setTitleId: [1441],
  name: 'Laureate',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have no idea what that Lucan thing was, but he will haunt your dreams forever.',
  acquisition: `Complete the The Great Escape zone event in ${zoneLink(Neutropolis)}.`,
  links: [
    { title: 'Laureate Badge', href: 'https://homecoming.wiki/wiki/Laureate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/laureate.png',
}
