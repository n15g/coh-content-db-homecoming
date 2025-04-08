import { BadgeData } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const Morbid: BadgeData = {
  type: 'exploration',
  key: 'morbid',
  setTitleId: [1639],
  name: 'Morbid',
  morality: 'all',
  badgeText: `You have discovered the nearly forgotten sub-sub-basement of the hospital morgue, long since abandoned due to an infestation of Ghouls.
Perhaps here you can learn something of lividity, morbidity, and the proclivities of the near dead.`,
  notes: `Located approx. 348 yards NNE of the Imperial Tunnel access point.`,
  links: [
    { title: 'Morbid Badge', href: 'https://homecoming.wiki/wiki/Morbid_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNova.key, coords: [-1280, 640, -3024] }, vidiotMapKey: '4' },
  ],
}
