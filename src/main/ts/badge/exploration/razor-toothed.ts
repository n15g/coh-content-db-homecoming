import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const RazorToothed: BadgeData = {
  type: 'exploration',
  key: 'razor-toothed',
  setTitleId: [295],
  name: 'Razor Toothed',
  morality: 'rogue-isles-access',
  badgeText: `This is the spot where Mako paraded Scrapyard's body after he eviscerated him. Many of the locals have seen his ghost in this area.`,
  notes: `Located in The Pit neighborhood, on a small rock outcropping at the southern end of a beach, 86 yards due south of the Magic Quartermaster.`,
  links: [
    { title: 'Razor Toothed Badge', href: 'https://homecoming.wiki/wiki/Razor_Toothed_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SharkheadIsle.key, coords: [460, -14, 1653], icon: 'badge', iconText: '1' } },
  ],
}
