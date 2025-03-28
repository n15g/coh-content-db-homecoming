import { BadgeData, zoneLink } from 'coh-content-db'
import { TheLabyrinthOfFog } from '../../zone/the-labyrinth-of-fog'

export const LabRat: BadgeData = {
  type: 'EXPLORATION',
  key: 'lab-rat',
  setTitle: { id: 2535 },
  name: [{ value: 'Lab Rat' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: TheLabyrinthOfFog.key,
  loc: [7146, -802.5, 68],
  badgeText: [{
    value: `Whilst exploring the Labyrinth of Fog, you navigated a maze known as the Endless Colonnade.
You can't help but feel like a lab rat, running a maze for some unseen intelligence's amusement...`,
  }],
  notes: `Located beneath the white mote at the end of the Endless Colonnade in ${zoneLink(TheLabyrinthOfFog)}.`,
  links: [
    { title: 'Lab Rat Badge', href: 'https://homecoming.wiki/wiki/Lab_Rat_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/labyrinth.png' }],
}
