import { BadgeData } from 'coh-content-db'
import { TheAbyss } from '../../zone/the-abyss'

export const Reborn: BadgeData = {
  type: 'exploration',
  key: 'reborn',
  setTitleId: [745],
  name: 'Reborn',
  morality: 'all',
  badgeText: `You have located where the Devouring Earth have attempted to bring forth the Hamidon outside of the prying eyes of Paragon City.`,
  notes: `Located in the northern part of the zone, beneath the center of the bowl-shaped water where Hamidon spawns.
The badge sits underwater at the point where the surrounding streams converge and can be earned even when Hamidon is absent.`,
  links: [
    { title: 'Reborn Badge', href: 'https://homecoming.wiki/wiki/Reborn_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheAbyss.key, coords: [679, -544, -3189] }, vidiotMapKey: '1' },
  ],
}
