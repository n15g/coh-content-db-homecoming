import { BadgeData, contactLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'
import { MsLiberty } from '../../contact/ms-liberty'

export const Globetrotter: BadgeData = {
  type: 'exploration',
  key: 'globetrotter',
  setTitleId: [287],
  name: 'Globetrotter',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Lord Recluse targeted the statue of Atlas first, knowing it was an important symbol to Paragon's 'heroes.'`,
  notes: `Located in Sector 5, in front of the Atlas Statue, just behind the dais that ${contactLink(MsLiberty)} stands on in the hero's version of Atlas Park.`,
  links: [
    { title: 'Globetrotter Badge', href: 'https://homecoming.wiki/wiki/Globetrotter_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ReclusesVictory.key, coords: [128, 16, -249], icon: 'badge', iconText: '1' } },
  ],
}
