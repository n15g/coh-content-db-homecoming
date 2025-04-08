import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const Unlucky: BadgeData = {
  type: 'exploration',
  key: 'unlucky',
  setTitleId: [1556],
  name: 'Unlucky',
  morality: 'paragon-city-access',
  badgeText: `Every member of Freedom Corps who works in this base is considered unlucky.
The base is out-of-the-way from everything in Paragon City and has a long daily commute.
Arachnos occasionally tries to spy on this base, but even they can't be bothered to come out this far from everything.`,
  notes: 'Located in the Industry Pier neighborhood, directly in front of the Freedom Corps store.',
  links: [
    { title: 'Unlucky Badge', href: 'https://homecoming.wiki/wiki/Unlucky_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: IndependencePort.key, coords: [2044, 0, -9663] }, vidiotMapKey: '8' },
  ],
}
