import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const Meltdown: BadgeData = {
  type: 'EXPLORATION',
  key: 'meltdown',
  setTitle: { id: 132 },
  name: [{ value: 'Meltdown' }],
  alignment: ['H'],
  zoneKey: TerraVolta.key,
  loc: [1120, 721, -3080],
  badgeText: [{
    value: `Covert Rikti strike teams have attempted to destroy the Terra Volta reactor on more than one occasion.`,
  }],
  notes: `Located on top of the main reactor, on the northeast sector of the dome just before the dropoff.`,
  links: [
    { title: 'Meltdown Badge', href: 'https://homecoming.wiki/wiki/Meltdown_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
