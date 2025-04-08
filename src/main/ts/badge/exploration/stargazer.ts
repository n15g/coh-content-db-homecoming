import { BadgeData } from 'coh-content-db'
import { NightWard } from '../../zone/night-ward'

export const Stargazer: BadgeData = {
  type: 'exploration',
  key: 'stargazer',
  setTitleId: [2233],
  name: 'Stargazer',
  morality: 'all',
  badgeText: `Throwing caution aside you reach the uppermost point of Night Ward.
Here, scattered spirits soar overhead like shooting stars in the night sky, forever doomed to the limbo of Night Ward as she drifts ever further from the land of the dead.`,
  notes: `Located in the City of Souls neighborhood, 433 yards NE of the map marker, at the top of the Night Ward version of the Westerman Building.`,
  links: [
    { title: 'Stargazer Badge', href: 'https://homecoming.wiki/wiki/Stargazer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NightWard.key, coords: [178, 944, -227] }, vidiotMapKey: '8' },
  ],
}
