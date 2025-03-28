import { BadgeData, zoneLink } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const PassingFab: BadgeData = {
  type: 'EXPLORATION',
  key: 'passing-fab',
  setTitle: { id: 1510 },
  name: [{ value: 'Passing Fab' }],
  alignment: ['V'],
  zoneKey: Grandville.key,
  loc: [2496, -848, -3016],
  badgeText: [{
    value: `These underground tunnels are the only relatively safe way to get into the Fab.
They are used as both an emergency exit from the Fab and as a method of sending in reinforcements straight from Grandville proper, should Longbow try to launch an offensive attack.`,
  }],
  notes: `Located in ${zoneLink(Grandville)}, in the Fab neighborhood.

It is at the bottom of the ramp leading into the Fab, in the entrance room to the underground tunnels. Specifically, it is just south of the Fab marker in a covered area.`,
  links: [
    { title: 'Passing Fab Badge', href: 'https://homecoming.wiki/wiki/Passing_Fab_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '5',
}
