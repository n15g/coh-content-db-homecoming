import { BadgeData } from 'coh-content-db'
import { NightWard } from '../../map/night-ward'

export const Stargazer: BadgeData = {
  type: 'EXPLORATION',
  key: 'stargazer',
  setTitle: { id: 2233 },
  name: [{ value: 'Stargazer' }],
  alignment: ['H', 'V', 'P'],
  mapKey: NightWard.key,
  loc: [178, 944, -227],
  badgeText: [{
    value: `Throwing caution aside you reach the uppermost point of Night Ward.
Here, scattered spirits soar overhead like shooting stars in the night sky, forever doomed to the limbo of Night Ward as she drifts ever further from the land of the dead.`,
  }],
  notes: `Located in [map:${NightWard.key}], in the City of Souls neighborhood, 433 yards NE of the map marker; at the top of the Night Ward version of the Westerman Building.`,
  links: [
    { title: 'Stargazer Badge', href: 'https://homecoming.wiki/wiki/Stargazer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '8',
}
