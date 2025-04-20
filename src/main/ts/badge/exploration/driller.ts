import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const Driller: BadgeData = {
  type: 'exploration',
  key: 'driller',
  setTitleId: [254],
  name: 'Driller',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `Three years ago, Ms. Liberty smashed the supervillain Thermonuke through the deck and into the volatile crude below.
Thermonuke's devastating powers ignited the oil and cracked open the Cairo Queen like a pixie stick.`,
  notes: `Located on a sunken ship off the southwest coast. The marker is almost where the water comes over the deck.`,
  links: [
    { title: 'Driller Badge', href: 'https://homecoming.wiki/wiki/Driller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PortOakes.key, coords: [1030, 8, 1982], icon: 'badge', iconText: '4' } },
  ],
}
