import { BadgeData } from 'coh-content-db'
import { Flux } from '../../contact/flux'

export const Complicated: BadgeData = {
  type: 'accomplishment',
  key: 'complicated',
  setTitleId: [2459],
  name: 'Complicated',
  morality: 'heroic',
  badgeText: `Sometimes, the line between good and evil isn't as simple as it seems.`,
  links: [
    { title: 'Negotiator Badge', href: 'https://homecoming.wiki/wiki/Complicated_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/complicated.png',
  requirements: [
    { key: 'take-out-frostfire', type: 'MISSION', missionName: 'Take Out Frostfire', contactKey: Flux.key },
  ],
}
