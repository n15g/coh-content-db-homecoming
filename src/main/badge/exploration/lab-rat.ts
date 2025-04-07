import { BadgeData } from 'coh-content-db'
import { TheLabyrinthOfFog } from '../../zone/the-labyrinth-of-fog'

export const LabRat: BadgeData = {
  type: 'exploration',
  key: 'lab-rat',
  setTitleId: [2535],
  name: 'Lab Rat',
  morality: 'all',
  zoneKey: TheLabyrinthOfFog.key,
  loc: [7146, -802.5, 68],
  badgeText: `Whilst exploring the Labyrinth of Fog, you navigated a maze known as the Endless Colonnade.
You can't help but feel like a lab rat, running a maze for some unseen intelligence's amusement...`,
  notes: `Located beneath the white mote at the end of the Endless Colonnade.`,
  links: [
    { title: 'Lab Rat Badge', href: 'https://homecoming.wiki/wiki/Lab_Rat_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/labyrinth.png',
}
