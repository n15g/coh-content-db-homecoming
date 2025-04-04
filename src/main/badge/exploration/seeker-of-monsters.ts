import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const SeekerOfMonsters: BadgeData = {
  type: 'exploration',
  key: 'seeker-of-monsters',
  setTitleId: [193],
  name: 'Seeker of Monsters',
  morality: 'heroic',
  zoneKey: TheHollows.key,
  loc: [21, -345, -1280],
  badgeText: [{
    value: 'Grendel\'s Gulch was named after the Trolls former leader, Grendel, who was defeated by Atta in a contest of strength on this spot.',
  }],
  notes: 'Found 217 yards South West of Grendel\'s Gulch marker.',
  links: [
    { title: 'Seeker of Monsters Badge', href: 'https://homecoming.wiki/wiki/Seeker_of_Monsters_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '2',
}
