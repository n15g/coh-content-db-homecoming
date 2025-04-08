import { BadgeData } from 'coh-content-db'
import { NightWard } from '../../zone/night-ward'

export const HouseHunter: BadgeData = {
  type: 'exploration',
  key: 'house-hunter',
  setTitleId: [2228],
  name: 'House Hunter',
  morality: 'all',
  badgeText: `Chance holds little sway over the fate of Night Ward's visitors, and your happening upon the Midnighter Mansion was no exception.
Despite the gloomy facade of this old Victorian house you feel eerily at home within its walls.`,
  notes: `Located in the Arcane Quarter neighborhood, just inside the entrance to the Midnighter Mansion.

To access the mansion and obtain the badge, you must first enter through an alternate entrance.
The coordinates for this entrance are (1797.9, 109.6, -2416.4). It is a greenish-colored building situated atop a hill, approximately 94 yards from the Tunnel entry marked on your map.`,
  links: [
    { title: 'House Hunter Badge', href: 'https://homecoming.wiki/wiki/House_Hunter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NightWard.key, coords: [1699, -577, -1975] }, vidiotMapKey: '3' },
  ],
}
