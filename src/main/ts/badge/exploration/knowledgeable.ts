import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const Knowledgeable: BadgeData = {
  type: 'exploration',
  key: 'knowledgeable',
  setTitleId: [2071],
  name: 'Knowledgeable',
  releaseDate: '2019-01-01',
  morality: 'paragon-city-access',
  badgeText: `Although the human genome was mapped out by many of the scientific community's brightest men and women, this library documents scores of super power related anomalies that continue to baffle genetic experts around the world.`,
  notes: 'Located in the GIFT office, between the third and fourth row of bookshelves.',
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoAtlasPark.key, coords: [43.4, -783.8, -1000.8], icon: 'badge', iconText: '5' } },
  ],
}
