import { BadgeData } from 'coh-content-db'
import { TheChantry } from '../../zone/the-chantry'

export const Demiurge: BadgeData = {
  type: 'exploration',
  key: 'demiurge',
  setTitleId: [1820],
  name: 'Demiurge',
  morality: 'paragon-city-access',
  badgeText: `At last you have arrived. Every challenge faced you have cast down with blood and sweat, never once succumbing to despair or defeat.
The Shadow Shard has tested you countless times and each time you have triumphed.
No mind games or violations to your person could prevent you from reaching this point and now you stand at the pinnacle of the Chantry, the lord of this realm in spirit, if not in actuality.`,
  notes: `Located at The Chantry marker, directly atop the Chantry itself.`,
  links: [
    { title: 'Demiurge Badge', href: 'https://homecoming.wiki/wiki/Demiurge_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheChantry.key, coords: [0, 2677, -4], icon: 'badge', iconText: '8' } },
  ],
}
