import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const Regal: BadgeData = {
  type: 'exploration',
  key: 'regal',
  setTitleId: [115],
  name: 'Regal',
  morality: 'paragon-city-access',
  badgeText: 'King Mihenra, a self-proclaimed warlord from the Netherworld, attempted to seize control of Paragon City, only to be defeated by Positron on this very spot.',
  notes: `Located in the Powderkeg neighborhood, approximately 600 yards due west of the Powderkeg marker. At this point, you'll find a road. Directly north, one level down, is a tunnel entrance."

"The badge marker is located along the center divider inside the tunnel, 682 yards west of the Powderkeg marker.`,
  links: [
    { title: 'Regal Badge', href: 'https://homecoming.wiki/wiki/Regal_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Boomtown.key, coords: [-448, 42, 2170], icon: 'badge', iconText: '2' } },
  ],
}
