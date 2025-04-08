import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const Meltdown: BadgeData = {
  type: 'exploration',
  key: 'meltdown',
  setTitleId: [132],
  name: 'Meltdown',
  morality: 'paragon-city-access',
  badgeText: `Covert Rikti strike teams have attempted to destroy the Terra Volta reactor on more than one occasion.`,
  notes: `Located on top of the main reactor, on the northeast sector of the dome just before the dropoff.`,
  links: [
    { title: 'Meltdown Badge', href: 'https://homecoming.wiki/wiki/Meltdown_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TerraVolta.key, coords: [1120, 721, -3080] }, vidiotMapKey: '2' },
  ],
}
