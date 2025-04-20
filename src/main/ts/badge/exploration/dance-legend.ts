import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const DanceLegend: BadgeData = {
  type: 'exploration',
  key: 'dance-legend',
  setTitleId: [1530],
  name: 'Dance Legend',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Paragon Dance Party was a popular place for local heroes to go relax and have a good time.
However, it was almost instantly closed when entrances to Pocket D were opened up by the owner of the Dance Party, DJ Zero, who was merely using the location
as a test bed to see if his pet project, Pocket D, would be a success.`,
  notes: 'Located at the back entrance of the building, 170 yards northwest of the south Paragon City Monorail station.',
  links: [
    { title: 'Dance Legend Badge', href: 'https://homecoming.wiki/wiki/Dance_Legend_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SteelCanyon.key, coords: [-4316, -100, 1783], icon: 'badge', iconText: '5' } },
  ],
}
