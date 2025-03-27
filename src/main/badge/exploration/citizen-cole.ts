import { BadgeData, mapLink } from 'coh-content-db'
import { NovaPraetoria } from '../../map/nova-praetoria'

export const CitizenCole: BadgeData = {
  type: 'EXPLORATION',
  key: 'citizen-cole',
  setTitle: { id: 1401 },
  name: [{ value: 'Citizen Cole' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Citizens who appreciate all the marvelous things that Emperor Cole has done for them have the best view of Praetoria from here.` },
    { alignment: 'V', value: `Citizens who appreciate all the marvelous things that President Cole has done for them have the best view of Praetoria from here.` },
  ],
  mapKey: NovaPraetoria.key,
  loc: [-3090, -4, -255],
  notes: `Located in ${mapLink(NovaPraetoria)} between two bridges to Imperial City in the W part of the Elyssian Avenue neighborhood, 592 yards W of the Magisterium marker.`,
  links: [
    { title: 'Citizen Cole Badge', href: 'https://homecoming.wiki/wiki/Citizen_Cole_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '2',
}
