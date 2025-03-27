import { BadgeData, mapLink } from 'coh-content-db'
import { NovaPraetoria } from '../../map/nova-praetoria'

export const GuardiansOfJustice: BadgeData = {
  type: 'EXPLORATION',
  key: 'guardians-of-justice',
  setTitle: { id: 1593 },
  name: [{ value: 'Guardians of Justice' }],
  alignment: ['H', 'V', 'P'],
  mapKey: NovaPraetoria.key,
  loc: [-5097, 290, -830],
  badgeText: [{
    value: 'From its heavily fortified bunker, the Praetorian Police Department extends the sheltering arms of Imperial Justice to all citizens.',
  }],
  notes: `Located in ${mapLink(NovaPraetoria)} on top of the PPD headquarters building, 223 yards north of the Magisterium marker.`,
  links: [
    { title: 'Guardians of Justice Badge', href: 'https://homecoming.wiki/wiki/Guardians_of_Justice_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '4',
}
