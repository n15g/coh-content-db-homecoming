import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const TheNewBoss: BadgeData = {
  type: 'exploration',
  key: 'the-new-boss',
  setTitleId: [1748],
  name: 'The New Boss',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Clockwork captured or appropriated by the Resistance are reprogrammed here, using taps into the Neutropolis wide area networks to speed the process.
Some become soldiers, others servants; a few become bombs, designed to go back to scrubbing off graffiti and tending flowers until the right trigger is sent.
Then... 'kaboom.' The Clockwork so reprogrammed are not given a choice in the matter.`,
  notes: `Located 263 yards NW of the Resistance Surface Access.`,
  links: [
    { title: 'The New Boss Badge', href: 'https://homecoming.wiki/wiki/The_New_Boss_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNeutropolis.key, coords: [-399, -1200, -2696], icon: 'badge', iconText: '8' } },
  ],
}
