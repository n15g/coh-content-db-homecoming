import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const Pristine: BadgeData = {
  type: 'exploration',
  key: 'pristine',
  setTitleId: [2400],
  name: 'Pristine',
  morality: 'paragon-city-access',
  badgeText: `This area looks very peaceful; the perfect place for a picnic after a day of hiking around the reservoir. A nice safe spot for a bit of walking. You're not afraid of spiders... are you?`,
  notes: 'Located on the grass, south of the fence around a building in the Reservoir Area.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoFaultline.key, coords: [573.8, 0, 4438] }, vidiotMapKey: '5' },
  ],
}
