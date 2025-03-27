import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundNova } from '../../map/underground-nova'

export const Morbid: BadgeData = {
  type: 'EXPLORATION',
  key: 'morbid',
  setTitle: { id: 1639 },
  name: [{ value: 'Morbid' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNova.key,
  loc: [-1280, 640, -3024],
  badgeText: [{
    value: 'You have discovered the nearly forgotten sub-sub-basement of the hospital morgue, long since abandoned due to an infestation of Ghouls.'
      + ' Perhaps here you can learn something of lividity, morbidity, and the proclivities of the near dead.',
  }],
  notes: `Located in ${mapLink(UndergroundNova)} approximately 348 yards NNE of the Imperial Tunnel access point.`,
  links: [
    { title: 'Morbid Badge', href: 'https://homecoming.wiki/wiki/Morbid_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '4',
}
