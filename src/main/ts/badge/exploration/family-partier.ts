import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const FamilyPartier: BadgeData = {
  type: 'exploration',
  key: 'family-partier',
  setTitleId: [1554],
  name: 'Family Partier',
  morality: 'paragon-city-access',
  badgeText: `The Family uses this area right in the shadow of Terra Volta to conduct various parties, and the occasional hit on one of their own.
They've also been searching for secret entrances into the reactor, though so far they have been unsuccessful.`,
  notes: `Located in the Power Island neighborhood, at the bottom of the boardwalk ramp on the south side of the island.`,
  links: [
    { title: 'Family Partier Badge', href: 'https://homecoming.wiki/wiki/Family_Partier_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: IndependencePort.key, coords: [-12, -21, 2376] }, vidiotMapKey: '6' },
  ],
}
