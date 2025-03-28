import { BadgeData, mapLink } from 'coh-content-db'
import { MercyIsland } from '../../map/mercy-island'
import { PortOakes } from '../../map/port-oakes'
import { CapAuDiable } from '../../map/cap-au-diable'
import { SharkheadIsle } from '../../map/sharkhead-isle'

export const Lorekeeper: BadgeData = {
  type: 'HISTORY',
  key: 'lorekeeper',
  setTitle: { id: 317 },
  name: [
    { value: 'Lorekeeper' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You have learned much that is hidden from the eyes of mortal men.` },
  ],
  links: [
    { title: 'Lorekeeper Badge', href: 'https://homecoming.wiki/wiki/Lorekeeper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-v.png' },
  ],
  requirements: [[
    {
      key: 'lore-0',
      type: 'PLAQUE',
      mapKey: MercyIsland.key,
      plaqueType: 'MONUMENT',
      loc: [-907, 97, -380],
      plaqueInscription: `It is said that the snake-like beings that live in the rotting warrens of this island were cast-offs of the 'Children of Enos,' a bizarre cult that settled these islands in the 1600s. Rumors persist that the original snake-beings who sired the creatures visible today are still alive, writhing somewhere within their labyrinthine lairs.`,
      notes: `This monument is in ${mapLink(MercyIsland)} right up against the Mercy wall that splits the zone between Darwin's Landing and Mercy. It is 90 yards west of Mongoose.`,
      vidiotMapKey: '1',
    },
    {
      key: 'lore-1',
      type: 'PLAQUE',
      mapKey: PortOakes.key,
      plaqueType: 'MONUMENT',
      loc: [-1550, 35, 1945],
      plaqueInscription: `Long ago, a group of cultists called the 'Children of Enos' fled France and settled in these isles. French accounts claim the cultists practiced dark rituals, human sacrifice, and the summoning of demons. They were eventually defeated by a team of heroes led by the famous Father Martin Henri.`,
      notes: `This monument is in ${mapLink(PortOakes)} south of the east ferry, at the end of the rocky peninsula.`,
      vidiotMapKey: '1',
    },
    {
      key: 'lore-2',
      type: 'PLAQUE',
      mapKey: CapAuDiable.key,
      plaqueType: 'MONUMENT',
      loc: [-1712, 0, -1108],
      plaqueInscription: `A group of settlers called the Children of Enos first settled what is today called Cap au Diable in the late 1600s, seeking freedom from religious persecution. When French soldiers attempted to force them off their land, the Children of Enos bravely attempted to defend themselves. Labeled Cultists by the French soldiers, in the end they were brutally repressed by the notorious witch-hunter Padre Fancois Hardi. Legends claim that the Children of Enos fought for their home and freedom with such ferocity that Padre Hardi believed them possessed by devils. After the last of the Children of Enos were gone, he gave this part of the island it's present name, which means 'The Cape of the Devil' in French.`,
      notes: `This monument straddles the border between the Mount Diable and New Haven neighborhoods in ${mapLink(CapAuDiable)}. It is northeast of Aeon City.`,
      vidiotMapKey: '1',
    },
    {
      key: 'lore-3',
      type: 'PLAQUE',
      mapKey: SharkheadIsle.key,
      plaqueType: 'MONUMENT',
      loc: [-832, 0, -403],
      plaqueInscription: `Sharkhead Isle was given its name by the free traders who first mapped and settled it in the early 1600s. For many years it served as a hub for the rest of the Isles, with its naturally protected bay as a home port for explorers, entrepreneurs, and pirates. Sharkhead Isle also acted as a central hub for many of the mystics and witchdoctors of the era, who sought the rare shards of red crystal coral. Even in the modern day, would-be practitioners of magic like the cultists of the Circle of Thorns still attempt to illegally acquire shards of Red Coral Crystal, believing in its supernatural power. This had made it necessary for trade in the Red Crystal to be declared illegal. Any shards of Red Coral Crystal must be turned over to Arachnos to prevent this illegal practice from causing trouble again.`,
      notes: `This monument is located at the south end of the parking lot just west of the Rogue Isles Ferry in ${mapLink(SharkheadIsle)}.`,
      vidiotMapKey: '1',
    },
  ]],
}
