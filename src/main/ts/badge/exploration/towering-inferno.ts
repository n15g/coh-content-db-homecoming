import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const ToweringInferno: BadgeData = {
  type: 'exploration',
  key: 'towering-inferno',
  setTitleId: [1777],
  name: 'Towering Inferno',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This tower used to be a bastion for the Trolls, providing them a good view over much of Boomtown.
When the Outcasts moved in, they violently assaulted this tower and killed or drove out the Trolls holed up within.
This was a major victory for the Outcasts, and they keep the fires burning within as a constant reminder to the Trolls still in Boomtown of the defeat they suffered.`,
  notes: 'Located atop a smoldering skyscraper 597 yards NNE of the entrance.',
  links: [
    { title: 'Towering Inferno Badge', href: 'https://homecoming.wiki/wiki/Towering_Inferno_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Boomtown.key, coords: [-1973, 576, 4017], icon: 'badge', iconText: '5' } },
  ],
}
