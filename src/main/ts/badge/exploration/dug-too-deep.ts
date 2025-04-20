import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const DugTooDeep: BadgeData = {
  type: 'exploration',
  key: 'dug-too-deep',
  setTitleId: [2403],
  name: 'Dug Too Deep',
  releaseDate: '2019-06-01',
  morality: 'paragon-city-access',
  badgeText: `Though magical runes and protection spells were once used to hide Oranbega from the rest of the world, all that ended with the Rikti War.
Now, anyone who finds a physical entrance in the dark canyons may reach the sunken city... if they're brave or foolish enough to do so.`,
  notes: 'Directly south of the dark canyons marker, down in the cracks.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoFaultline.key, coords: [1151.5, -615.4, -28.5], icon: 'badge', iconText: '8' } },
  ],
}
