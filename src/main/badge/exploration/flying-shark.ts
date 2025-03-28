import { BadgeData, zoneLink } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const FlyingShark: BadgeData = {
  type: 'EXPLORATION',
  key: 'flying-shark',
  setTitle: { id: 1565 },
  name: [{ value: 'Flying Shark' }],
  alignment: ['H'],
  zoneKey: Brickstown.key,
  loc: [-2190, 573, 1162],
  badgeText: [{
    value: 'The roof of the Zig is the site of the first breakout by Arachnos.'
      + ' Captain Mako had been captured by some heroes, only to escape, tearing a path of destruction through the Zig.'
      + ' It ended up on the roof, where he commandeered a Longbow Skiff to fly himself out.'
      + ' Mako was seen leaping from skiff to skiff during the aerial battle with Longbow until he dove into the waters of Talos to swim back to the Isles.',
  }],
  notes: `Located on the roof of the Zig in ${zoneLink(Brickstown)}, 36 yards northwest of the neighborhood marker.`,
  links: [
    { title: 'Flying Shark Badge', href: 'https://homecoming.wiki/wiki/Flying_Shark_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '3',
}
