import { BadgeData } from 'coh-content-db'
import { LockedAndLoaded } from '../exploration/locked-and-loaded'

export const LongbowRifleman: BadgeData = {
  type: 'gladiator',
  key: 'longbow-rifleman',
  setTitleId: [454],
  name: 'Longbow Rifleman',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: 'Longbow counts you as an ally.' },
    { alignment: 'villain', value: 'Even Longbow respects your skills.' },
  ],
  links: [
    { title: 'Longbow Rifleman Badge', href: 'https://homecoming.wiki/wiki/Longbow_Rifleman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: LockedAndLoaded.key, type: 'badge', badgeKey: LockedAndLoaded.key },
  ],
}
