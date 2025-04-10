import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const Valorous: BadgeData = {
  type: 'exploration',
  key: 'valorous',
  setTitleId: [123],
  name: 'Valorous',
  morality: 'paragon-city-access',
  badgeText: 'The titanic hero Atlas fell at Valor Bridge, protecting the city from invasion.',
  notes: `Located on top of the southernmost tower of the Valor Bridge, the westernmost and longest suspension bridge in the zone.

It is also 520 yards away from the Terra Volta entrance, though lots of this distance includes going up.`,
  links: [
    { title: 'Valorous Badge', href: 'https://homecoming.wiki/wiki/Valorous_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: IndependencePort.key, coords: [947, 609, -1152], icon: 'badge', iconText: '2' } },
  ],
}
