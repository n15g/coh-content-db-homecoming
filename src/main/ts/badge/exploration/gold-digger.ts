import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const GoldDigger: BadgeData = {
  type: 'exploration',
  key: 'gold-digger',
  setTitleId: [1630],
  name: 'Gold Digger',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `In Aureas, ground is being broken on new office towers to support Praetoria's ever burgeoning economy.
Witness the tireless Clockwork who labor continuously to bring the dream of Praetoria to life.`,
  notes: `Located on top of a building under construction 460 yards N of the Aureas marker.`,
  links: [
    { title: 'Gold Digger Badge', href: 'https://homecoming.wiki/wiki/Gold_Digger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ImperialCity.key, coords: [280, 28, -2288], icon: 'badge', iconText: '1' } },
  ],
}
