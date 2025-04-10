import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Lobbyist: BadgeData = {
  type: 'exploration',
  key: 'lobbyist',
  setTitleId: [255],
  name: [
    { alignment: 'hero', value: 'Lobbyist' },
    { alignment: 'villain', value: 'Crooked Politician' },
  ],
  morality: 'all',
  badgeText: `Spanky Rabinowitz' cousin Charlie 'Big Buck' Rabinowitz owned Big Bucks Casino. It is said much of Spanky's campaign money came from the take here.`,
  notes: 'Located on top of the casino building 120 yards due east of Meteor Do.',
  links: [
    { title: 'Lobbyist Badge', href: 'https://homecoming.wiki/wiki/Lobbyist_Badge' },
    { title: 'Crooked Politician Badge', href: 'https://homecoming.wiki/wiki/Crooked_Politician_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: BloodyBay.key, coords: [2265, 137, -832], icon: 'badge', iconText: '1' } },
  ],
}
