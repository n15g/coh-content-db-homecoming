import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Ragnarok: BadgeData = {
  type: 'exploration',
  key: 'ragnarok',
  setTitleId: [288],
  name: 'Ragnarok',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Some say this battle will signal the end of civilization as we know it, and the beginning of a new history—written by Lord Recluse.',
  notes: `Located in Sector 3, 418 yards due south of the Echo pillbox. The badge is at the northern end of a cobblestone walkway on the western edge of a small park.`,
  links: [
    { title: 'Ragnaraok Badge', href: 'https://homecoming.wiki/wiki/Ragnarok_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ReclusesVictory.key, coords: [-848, -15, -352], icon: 'badge', iconText: '2' } },
  ],
}
