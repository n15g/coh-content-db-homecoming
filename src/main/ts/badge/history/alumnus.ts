import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { Croatoa } from '../../zone/croatoa'
import { SewerNetwork } from '../../zone/sewer-network'

export const Alumnus: BadgeData = {
  type: 'history',
  key: 'alumnus',
  setTitleId: [411],
  name: 'Alumnus',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of Croatoa.`,
  links: [
    { title: 'Alumnus Badge', href: 'https://homecoming.wiki/wiki/Alumnus_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'alum-0',
      type: 'monument',
      location: { zoneKey: AtlasPark.key, coords: [-640, 19.1, 1021.4], icon: 'plaque', iconText: '7' },
      monumentText: `On October 31, 2004, a creature known as Eochai was defeated on this spot.
Although the creature and its minions were thought to be vanquished by Paragon City's heroes, it appears they have simply relocated.
The northern village of Salamanca is beset by the creatures and is in grave need of heroic assistance.`,
      notes: `Located 326 yards due east of the entrance to the ${zoneLink(SewerNetwork)}.`,
    },
    {
      key: 'alum-1',
      type: 'monument',
      location: { zoneKey: Croatoa.key, coords: [541, 0, -1095], icon: 'pedestal', iconText: '1' },
      monumentText: `These ruins are all that remains of the original village of Salamanca, established in 1641.
Since their arrival, the Cabal have taken over the ruins and made them their home. It has been theorized that they feel most at home among these poor ashes.`,
      notes: `Located 167 yards northeast of the Sunset Ridge neighborhood marker.`,
    },
    {
      key: 'alum-2',
      type: 'monument',
      location: { zoneKey: Croatoa.key, coords: [132, -32, -788], icon: 'pedestal', iconText: '2' },
      monumentText: `It wasn't long ago that the spirit of War Witch chose this island to call her home.
Though she will speak to the occasional hero, her revelations about her reasons for being here are cryptic at best.
Some say she feels an affinity for the Cabal, after having lost her own coven at the hands of Requiem.
Others say her presence here is atonement for some crime she commited during her life.
Whatever her reasons, War Witch is an integral part of the strange mystery that surrounds Croatoa.`,
      notes: `Located 57 yards west of War Witch.`,
    },
    {
      key: 'alum-3',
      type: 'monument',
      location: { zoneKey: Croatoa.key, coords: [-1033, 32, 2136], icon: 'pedestal', iconText: '3' },
      monumentText: `The Occult Studies Annex of Paragon City University was established only recently, but already it's enrollment has taken a significant dive.
Various artifacts and tomes stored within the university seem to be valuable to the ghastly creatures that haunt Croatoa, and it is only by the efforts of the magically inclined faculty that these creatures are kept at bay.`,
      notes: `Located in the Salamanca neighborhood, 84 yards east of the hospital. When approaching the university, turn right instead of taking the stairs with the lion statues.
Follow the sidewalk to a small area with benches and a police drone—the plaque is among the benches.`,
    },
    {
      key: 'alum-4',
      type: 'monument',
      location: { zoneKey: Croatoa.key, coords: [-1305, 0, 2982], icon: 'pedestal', iconText: '4' },
      monumentText: `No one can say how long this massive throne has rested here, but Salamanca's inhabitants are certain it arrived only after the mists of Croatoa closed in.
Those brave enough to venture close have reported that a grotesque giant sometimes snoozes here. Most, however, leave the area strictly alone.`,
      notes: `Located in the Misty Wood neighborhood, about 330 yards SSE of the Field Analyst.`,
    },
  ],
}
