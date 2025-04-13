import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const PassingFab: BadgeData = {
  type: 'exploration',
  key: 'passing-fab',
  setTitleId: [1510],
  name: 'Passing Fab',
  morality: 'rogue-isles-access',
  badgeText: `These underground tunnels are the only relatively safe way to get into the Fab.
They are used as both an emergency exit from the Fab and as a method of sending in reinforcements straight from Grandville proper, should Longbow try to launch an offensive attack.`,
  notes: `Located in the Fab neighborhood, at the base of the ramp leading into the Fab, inside the entrance to the underground tunnels. The badge is just south of the neighborhood marker, in a sheltered area.`,
  links: [
    { title: 'Passing Fab Badge', href: 'https://homecoming.wiki/wiki/Passing_Fab_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Grandville.key, coords: [2496, -848, -3016], icon: 'badge', iconText: '5' } },
  ],
}
