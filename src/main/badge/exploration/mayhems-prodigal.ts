import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../map/first-ward'

export const MayhemsProdigal: BadgeData = {
  type: 'EXPLORATION',
  key: 'mayhems-prodigal',
  setTitle: { id: 2052 },
  name: [{ value: 'Mayhem\'s Prodigal' }],
  alignment: ['H', 'V', 'P'],
  mapKey: FirstWard.key,
  loc: [2469, 251, 2254],
  badgeText: [{
    value: `This is where it all started. When First Ward was still a tyrant's dream, the true Mother of Mercy Hospital was already an aging heap of Gothic masonry.
No one is sure exactly when Praetor Tilman built this hospital, or why she built it here, but even with its crumbling edifices, weed-choked grounds, and vacant windows,
 the place resonates with a malign power.
So close to Mother Mayhem now, you can feel the weight of her psyche pressing down upon you, can feel her sightless gaze turn to you, condemning and welcoming at the same time:
 as with the return of a prodigal child.`,
  }],
  notes: `Located in [map:${FirstWard.key}] in the Mother of Mecy Hospital neighborhood, about 3 feet away from the map marker.`,
  links: [
    { title: 'Mayhem\'s Prodigal Badge', href: 'https://homecoming.wiki/wiki/Mayhem%27s_Prodigal_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '5',
}
