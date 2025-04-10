import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const SeekerOfMonsters: BadgeData = {
  type: 'exploration',
  key: 'seeker-of-monsters',
  setTitleId: [193],
  name: 'Seeker of Monsters',
  morality: 'paragon-city-access',
  badgeText: `Grendel's Gulch was named after the Trolls former leader, Grendel, who was defeated by Atta in a contest of strength on this spot.`,
  notes: `Located 217 yards South West of the Grendel's Gulch marker.`,
  links: [
    { title: 'Seeker of Monsters Badge', href: 'https://homecoming.wiki/wiki/Seeker_of_Monsters_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHollows.key, coords: [21, -345, -1280], icon: 'badge', iconText: '2' } },
  ],
}
