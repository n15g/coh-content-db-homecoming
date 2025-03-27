import { BadgeData, mapLink } from 'coh-content-db'
import { SharkheadIsle } from '../../map/sharkhead-isle'

export const RazorToothed: BadgeData = {
  type: 'EXPLORATION',
  key: 'razor-toothed',
  setTitle: { id: 295 },
  name: [{ value: 'Razor Toothed' }],
  alignment: ['V'],
  mapKey: SharkheadIsle.key,
  loc: [460, -14, 1653],
  badgeText: [{
    value: `This is the spot where Mako paraded Scrapyard's body after he eviscerated him. Many of the locals have seen his ghost in this area.`,
  }],
  notes: `Located in ${mapLink(SharkheadIsle)}, in The Pit neighborhood.

From the Magic Quartermaster, walk due south.
 There is a small beach, and the badge marker is located on a small rock cropping on the south end of that beach, 86 yards due south of the magic Quartermaster.`,
  links: [
    { title: 'Razor Toothed Badge', href: 'https://homecoming.wiki/wiki/Razor_Toothed_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '1',
}
