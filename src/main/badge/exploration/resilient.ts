import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const Resilient: BadgeData = {
  type: 'EXPLORATION',
  key: 'resilient',
  setTitle: { id: 2324 },
  name: [{ value: 'Resilient' }],
  alignment: ['H'],
  badgeText: [{ value: `This monument was built by a local artist with materials scavenged after the first Rikti invasion. Having wrought creation from destruction, it reaches skyward to represent Paragon City's unbroken spirit.` }],
  zoneKey: EchoAtlasPark.key,
  loc: [-1471.4, 56.8, -564],
  notes: `Located 102 yards east of the marker for Hyperion Way, there's a tall, boxy, chunky piece of modern art sitting in a downstairs area.
Climb those boxes and the badge sits on the topmost box.`,
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '8',
}
