import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const Parapsychologist: BadgeData = {
  type: 'exploration',
  key: 'parapsychologist',
  setTitleId: [192],
  name: 'Parapsychologist',
  morality: 'paragon-city-access',
  badgeText: `These hills are home to some of the Circle's most secret rites. Very few are allowed to leave after venturing here.`,
  notes: `Located 293 yards NW of the Eastgate Heights marker.`,
  links: [
    { title: 'Parapsychologist Badge', href: 'https://homecoming.wiki/wiki/Parapsychologist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHollows.key, coords: [-704, 379, 885], icon: 'badge', iconText: '1' } },
  ],
}
