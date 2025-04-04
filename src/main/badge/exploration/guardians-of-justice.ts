import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const GuardiansOfJustice: BadgeData = {
  type: 'exploration',
  key: 'guardians-of-justice',
  setTitleId: [1593],
  name: 'Guardians of Justice',
  morality: 'all',
  zoneKey: NovaPraetoria.key,
  loc: [-5097, 290, -830],
  badgeText: `From its heavily fortified bunker, the Praetorian Police Department extends the sheltering arms of Imperial Justice to all citizens.`,
  notes: `Located on top of the PPD headquarters building, 223 yards north of the Magisterium marker.`,
  links: [
    { title: 'Guardians of Justice Badge', href: 'https://homecoming.wiki/wiki/Guardians_of_Justice_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '4',
}
