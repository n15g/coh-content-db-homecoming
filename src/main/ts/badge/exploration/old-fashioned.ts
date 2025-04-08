import { BadgeData, zoneLink } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'
import { SkywayCity } from '../../zone/skyway-city'

export const OldFashioned: BadgeData = {
  type: 'exploration',
  key: 'old-fashioned',
  setTitleId: [638],
  name: 'Old Fashioned',
  morality: 'paragon-city-access',
  badgeText: [
    { alignment: 'hero', value: `Best doughnuts in all of Paragon City! You picked the ultimate bragging rights location.` },
    { alignment: 'villain', value: `Who doesn't like donuts? Even Lord Recluse likes donuts.` },
  ],
  notes: `Located inside the hole of the large inflatable doughnut on top of the Drenched Donuts shop just inside the transfer to ${zoneLink(SkywayCity)}.`,
  links: [
    { title: 'Old Fashioned Badge', href: 'https://homecoming.wiki/wiki/Old_Fashioned_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Faultline.key, coords: [-170, 74, -1504] }, vidiotMapKey: '4' },
  ],
}
