import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const CitizenCole: BadgeData = {
  type: 'exploration',
  key: 'citizen-cole',
  setTitleId: [1401],
  name: 'Citizen Cole',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Citizens who appreciate all the marvelous things that Emperor Cole has done for them have the best view of Praetoria from here.` },
    { alignment: 'villain', value: `Citizens who appreciate all the marvelous things that President Cole has done for them have the best view of Praetoria from here.` },
  ],
  zoneKey: NovaPraetoria.key,
  loc: [-3090, -4, -255],
  notes: `Located between two bridges to Imperial City in the western part of the Elyssian Avenue neighborhood, 592 yards west of the Magisterium marker.`,
  links: [
    { title: 'Citizen Cole Badge', href: 'https://homecoming.wiki/wiki/Citizen_Cole_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '2',
}
