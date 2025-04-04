import { BadgeData, zoneLink } from 'coh-content-db'
import { MidnighterClub } from '../../zone/midnighter-club'

export const MidnighterArchivist: BadgeData = {
  type: 'HISTORY',
  key: 'midnighter-archivist',
  setTitle: { id: 1009 },
  name: [
    { value: 'Midnighter Archivist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have learned the secrets of the Midnighter Club.` },
  ],
  links: [
    { title: 'Midnighter Archivist Badge', href: 'https://homecoming.wiki/wiki/Midnighter_Archivist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/midnighter-archivist.png' },
  ],
  requirements: [[
    {
      key: 'midn-0',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-514, -18, -197],
      plaqueInscription: `The Skull of Tommy Arcanus`,
      notes: `This location is a skull sitting on the desk just inside the entrance of the ${zoneLink(MidnighterClub)}.`,
      vidiotMapKey: '1',
    },
    {
      key: 'midn-1',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-479, -18, -228],
      plaqueInscription: `Forbidden Relics`,
      notes: `This location is the entrance lobby of the ${zoneLink(MidnighterClub)}. As you enter from an outside zone, the relics are in a case in the downstairs part of the lobby, in the back right of the area. The case is next to a mission door that currently cannot be entered.`,
      vidiotMapKey: '2',
    },
    {
      key: 'midn-2',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-379, -2, -142],
      plaqueInscription: `Rularuu Library`,
      notes: `This location is the lobby of the ${zoneLink(MidnighterClub)}. The bookcase is on the back wall of the upstairs library before entering the caves. It is the far left bookcase on the left side.`,
      vidiotMapKey: '3',
    },
    {
      key: 'midn-3',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-414, 0, -228],
      plaqueInscription: `Why I Left and Why You Must Stay`,
      notes: `This location is the lobby of the ${zoneLink(MidnighterClub)}. The book is laying closed on a table on the right side of the library upstairs.`,
      vidiotMapKey: '4',
    },
    {
      key: 'midn-4',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-382, 3, -180],
      plaqueInscription: `The Death and Rebirth of Numina`,
      notes: `This location is the lobby of the ${zoneLink(MidnighterClub)}. The book has a red cover and is standing up with two other books (a green one and a blue one) on a table on the left side of the library upstairs. It is on the table just to the left before you go through the wooden doors into the caves.`,
      vidiotMapKey: '5',
    },
    {
      key: 'midn-5',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [216, 1, -38],
      plaqueInscription: `Arcane Items Lot #49`,
      notes: `This location is the caves of the ${zoneLink(MidnighterClub)}. Going north from the crystal to Cimerora, it is in the western (left) alcove on the left just as you enter. The box's color is slightly grayer and more worn than the other boxes it is sitting on.`,
      vidiotMapKey: '6',
    },
    {
      key: 'midn-6',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [235, 0, -100],
      plaqueInscription: `The Remains of Tielekku`,
      notes: `This location is the caves of the ${zoneLink(MidnighterClub)}. Going north from the crystal to Cimerora, it is in the western (left) alcove on the right side, on top of a table behind the first column on the right.`,
      vidiotMapKey: '7',
    },
    {
      key: 'midn-7',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [255, 0, -97],
      plaqueInscription: `Authentic Cimeroran Urn`,
      notes: `This location is the caves of the ${zoneLink(MidnighterClub)}. Going north from the crystal to Cimerora, it is in the western (left) alcove in the back right side of the room. It is the urn closest to the back right column.`,
      vidiotMapKey: '8',
    },
    {
      key: 'midn-8',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-17, -1, -106],
      plaqueInscription: `Midnighter Club Register`,
      notes: `This location is the caves of the ${zoneLink(MidnighterClub)}. Going north from the crystal to Cimerora, it is in the eastern (right) alcove. The book is on the right side of the bottom shelf that is to the left of the doorway into the room.`,
      vidiotMapKey: '9',
    },
    {
      key: 'midn-9',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-63, 0, -60],
      plaqueInscription: `The Memoirs of Pontice Doub`,
      notes: `This location is the caves of the ${zoneLink(MidnighterClub)}. Going north from the crystal to Cimerora, it is in the eastern (right) alcove. The book is on the middle shelf of the right three-shelf bookcase in the back of the room. It is a blue-covered book on the left side of the shelf, and it standing by itself.`,
      vidiotMapKey: '10',
    },
    {
      key: 'midn-10',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-11, 0, -33],
      plaqueInscription: `A working history of the Path of Dark`,
      notes: `This location is the caves of the ${zoneLink(MidnighterClub)}. Going north from the crystal to Cimerora, it is in the eastern (right) alcove. The book is on the table with the candle to the right of the entrance door.`,
      vidiotMapKey: '11',
    },
    {
      key: 'midn-11',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [-64, 0, -78],
      plaqueInscription: `Tomes on the Sicilian Stone`,
      notes: `This location is the caves of the ${zoneLink(MidnighterClub)}. Going north from the crystal to Cimerora, it is in the eastern (right) alcove. The books are on the leftmost short bookcase in the back of the room. It the group of three books on the right side of the shelf.`,
      vidiotMapKey: '12',
    },
    {
      key: 'midn-12',
      type: 'PLAQUE',
      zoneKey: MidnighterClub.key,
      plaqueType: 'MONUMENT',
      loc: [141, 0, -200],
      plaqueInscription: `Midnight Squad Banner`,
      notes: `This location is the caves of the ${zoneLink(MidnighterClub)}. It is one of the banners in the northern meeting room of the caves. The banner is due west (left) of the large meeting table. It is the solid banner, not the one with the slit down the middle.`,
      vidiotMapKey: '13',
    },
  ]],
}
