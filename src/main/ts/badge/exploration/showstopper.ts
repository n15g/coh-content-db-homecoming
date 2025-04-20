import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const Showstopper: BadgeData = {
  type: 'exploration',
  key: 'showstopper',
  setTitleId: [1508],
  name: 'Showstopper',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `Hundreds of spectators have stood in this spot, transfixed by the eclectic performances of the Carnival of Shadows.
Many of them are never seen again; some speculate that they've joined the troupe, while others fear they met more unpleasant fates.`,
  notes: `Located in the Fortune's Wheel neighborhood, at the eastern entrance of the Carnival, 328 yards ENE of the neighborhood marker.`,
  links: [
    { title: 'Showstopper Badge', href: 'https://homecoming.wiki/wiki/Showstopper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StMartial.key, coords: [-2198, 16, -1953], icon: 'badge', iconText: '8' } },
  ],
}
