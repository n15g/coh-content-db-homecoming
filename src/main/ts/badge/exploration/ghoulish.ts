import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Ghoulish: BadgeData = {
  type: 'exploration',
  key: 'ghoulish',
  setTitleId: [258],
  name: 'Ghoulish',
  morality: 'all',
  badgeText: 'The shards must be vibrating the very bones of the graves. You are almost sure you can hear scratching and clawing from the inside of the mausoleums.',
  notes: `Located 185 yards east and slightly north of the Ground Zero neighborhood inside a small building with a tunnel through it over the stone walkway.`,
  links: [
    { title: 'Ghoulish Badge', href: 'https://homecoming.wiki/wiki/Ghoulish_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: BloodyBay.key, coords: [91, 65, 360], icon: 'badge', iconText: '4' } },
  ],
}
