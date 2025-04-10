import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const Resilient: BadgeData = {
  type: 'exploration',
  key: 'resilient',
  setTitleId: [2324],
  name: 'Resilient',
  morality: 'paragon-city-access',
  badgeText: `This monument was built by a local artist with materials scavenged after the first Rikti invasion.
Having wrought creation from destruction, it reaches skyward to represent Paragon City's unbroken spirit.`,
  notes: `Located 102 yards east of the Hyperion Way marker, a tall, boxy piece of modern art sits in a downstairs area. Climb the boxes, and the badge is on the topmost one.`,
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoAtlasPark.key, coords: [-1471.4, 56.8, -564], icon: 'badge', iconText: '8' } },
  ],
}
