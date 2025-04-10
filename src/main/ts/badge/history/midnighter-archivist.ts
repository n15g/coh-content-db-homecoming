import { BadgeData, zoneLink } from 'coh-content-db'
import { MidnighterClub } from '../../zone/midnighter-club'
import { Cimerora } from '../../zone/cimerora'

export const MidnighterArchivist: BadgeData = {
  type: 'history',
  key: 'midnighter-archivist',
  setTitleId: [1009],
  name: 'Midnighter Archivist',
  morality: 'all',
  badgeText: `You have learned the secrets of the Midnighter Club.`,
  links: [
    { title: 'Midnighter Archivist Badge', href: 'https://homecoming.wiki/wiki/Midnighter_Archivist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/midnighter-archivist.png',
  requirements: [
    {
      key: 'midn-0',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-514, -18, -197], icon: 'object', iconText: '1' },
      monumentText: `The Skull of Tommy Arcanus`,
      notes: `Click on a skull sitting on the desk just inside the entrance.`,
    },
    {
      key: 'midn-1',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-479, -18, -228], icon: 'object', iconText: '2' },
      monumentText: `Forbidden Relics`,
      notes: `Click on a relic case in the back-right of the downstairs part of the lobby, next to a mission door.`,
    },
    {
      key: 'midn-2',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-379, -2, -142], icon: 'object', iconText: '3' },
      monumentText: `Rularuu Library`,
      notes: `Click on the far-left bookcase on the back wall of the upstairs library before entering the caves.`,
    },
    {
      key: 'midn-3',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-414, 0, -228], icon: 'object', iconText: '4' },
      monumentText: `Why I Left and Why You Must Stay`,
      notes: `Click on a book lying closed on a table on the right side of the library upstairs.`,
    },
    {
      key: 'midn-4',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-382, 3, -180], icon: 'object', iconText: '5' },
      monumentText: `The Death and Rebirth of Numina`,
      notes: `Click on a red book standing upright between a green and blue book on a table to the left before entering the cave doors upstairs.`,
    },
    {
      key: 'midn-5',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [216, 1, -38], icon: 'object', iconText: '6' },
      monumentText: `Arcane Items Lot #49`,
      notes: `Click on a worn gray box in the left alcove just past the entrance to the caves, heading toward the ${zoneLink(Cimerora)} crystal.`,
    },
    {
      key: 'midn-6',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [235, 0, -100], icon: 'object', iconText: '7' },
      monumentText: `The Remains of Tielekku`,
      notes: `Click on a book on a table behind the first right column in the left alcove heading toward the ${zoneLink(Cimerora)} crystal.`,
    },
    {
      key: 'midn-7',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [255, 0, -97], icon: 'object', iconText: '8' },
      monumentText: `Authentic Cimeroran Urn`,
      notes: `Click on the urn closest to the back right column in the left alcove near the ${zoneLink(Cimerora)} crystal.`,
    },
    {
      key: 'midn-8',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-17, -1, -106], icon: 'object', iconText: '9' },
      monumentText: `Midnighter Club Register`,
      notes: `Click on a book on the bottom shelf to the left of the doorway in the right alcove near the ${zoneLink(Cimerora)} crystal.`,
    },
    {
      key: 'midn-9',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-63, 0, -60], icon: 'object', iconText: '10' },
      monumentText: `The Memoirs of Pontice Doub`,
      notes: `Click on a blue book on the middle shelf of the right bookcase in the back of the right alcove near the ${zoneLink(Cimerora)} crystal.`,
    },
    {
      key: 'midn-10',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-11, 0, -33], icon: 'object', iconText: '11' },
      monumentText: `A working history of the Path of Dark`,
      notes: `Click on a book on the table with a candle to the right of the entrance in the right alcove near the ${zoneLink(Cimerora)} crystal.`,
    },
    {
      key: 'midn-11',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [-64, 0, -78], icon: 'object', iconText: '12' },
      monumentText: `Tomes on the Sicilian Stone`,
      notes: `Click on a group of three books on the right side of the leftmost bookcase in the back of the right alcove near the ${zoneLink(Cimerora)} crystal.`,
    },
    {
      key: 'midn-12',
      type: 'monument',
      location: { zoneKey: MidnighterClub.key, coords: [141, 0, -200], icon: 'object', iconText: '13' },
      monumentText: `Midnight Squad Banner`,
      notes: `Click on the solid banner to the left of the meeting table in the northern room of the caves.`,
    },
  ],
}
