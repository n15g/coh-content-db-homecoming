import { BadgeData, zoneLink } from 'coh-content-db'
import { TheChantry } from '../../zone/the-chantry'

export const Demiurge: BadgeData = {
  type: 'EXPLORATION',
  key: 'demiurge',
  setTitle: { id: 1820 },
  name: [{ value: 'Demiurge' }],
  alignment: ['H'],
  zoneKey: TheChantry.key,
  loc: [0, 2677, -4],
  badgeText: [{
    value: 'At last you have arrived.'
      + ' Every challenge faced you have cast down with blood and sweat, never once succumbing to despair or defeat.'
      + ' The Shadow Shard has tested you countless times and each time you have triumphed.'
      + ' No mind games or violations to your person could prevent you from reaching this point and now you stand at the pinnacle of the Chantry,'
      + ' the lord of this realm in spirit, if not in actuality.',
  }],
  notes: `Located in ${zoneLink(TheChantry)} at The Chantry marker, directly atop the Chantry itself.`,
  links: [
    { title: 'Demiurge Badge', href: 'https://homecoming.wiki/wiki/Demiurge_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
