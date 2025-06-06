import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const Newsman: BadgeData = {
  type: 'exploration',
  key: 'newsman',
  setTitleId: [119],
  name: [
    { sex: 'M', value: 'Newsman' },
    { sex: 'F', value: 'Newsgirl' },
  ],
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The Theodore Knight building was home to many Super Groups in the years before the Rikti War.`,
  notes: `Approx. 513 yrds. S of the "Dark Canyons" marker in front of the doors to a grey stoned high-rise that's tilting into the canyon, next to the west perimeter wall.`,
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoFaultline.key, coords: [1125, -26.9, 1296.7], icon: 'badge', iconText: '1' } },
  ],
}
