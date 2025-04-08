import { BadgeData, zoneLink } from 'coh-content-db'
import { TheLabyrinthOfFog } from '../../zone/the-labyrinth-of-fog'

export const HiddenInTheFog: BadgeData = {
  type: 'exploration',
  key: 'hidden-in-the-fog',
  setTitleId: [2530],
  name: 'Hidden In The Fog',
  morality: 'all',
  badgeText: `The Labyrinth of Fog is an endless maze constructed from the amalgamation of memories taken from those who have entered the maze.
Some speak of finding lost secrets, long forgotten, laying hidden amongst the fog, and that those who surrender themselves to the labyrinth are in a position to glean forbidden knowledge.`,
  acquisition: `Visit any one of the secret locations hidden within the ${zoneLink(TheLabyrinthOfFog)}`,
  links: [
    { title: 'Hidden In The Fog Badge', href: 'https://homecoming.wiki/wiki/Hidden_In_The_Fog_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/labyrinth.png',
  requirements: [
    { key: 'loc-0', type: 'location', notes: 'Green Warehouse', location: { zoneKey: TheLabyrinthOfFog.key, coords: [-1806, -261.1, 1118.5] } },
    { key: 'loc-1', type: 'location', notes: 'Violet Oranbega', location: { zoneKey: TheLabyrinthOfFog.key, coords: [-1327.5, 92.4, -1014] } },
    { key: 'loc-2', type: 'location', notes: 'Blue Cave', location: { zoneKey: TheLabyrinthOfFog.key, coords: [-24.5, -149.5, -3015] } },
    { key: 'loc-3', type: 'location', notes: 'Yellow Lambda', location: { zoneKey: TheLabyrinthOfFog.key, coords: [371, -462.6, 1254] } },
    { key: 'loc-4', type: 'location', notes: 'Red Cargo', location: { zoneKey: TheLabyrinthOfFog.key, coords: [442.4, -147, -1248] } },
    { key: 'loc-5', type: 'location', notes: 'Orange Council', location: { zoneKey: TheLabyrinthOfFog.key, coords: [-4281.4, -476, 2288.3] } },
  ],
}
