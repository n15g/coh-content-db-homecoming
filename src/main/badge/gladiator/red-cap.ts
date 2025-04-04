import { BadgeData } from 'coh-content-db'
import { Toothbreaker } from '../event/toothbreaker'

export const RedCap: BadgeData = {
  type: 'gladiator',
  key: 'red-cap',
  setTitleId: [529],
  name: [
    { value: 'Red Cap' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'You now can summon a Red Cap Rascal in the Arena pet battles.' },
  ],
  links: [
    { title: 'Red Cap Badge', href: 'https://homecoming.wiki/wiki/Red_Cap_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Toothbreaker.key, type: 'badge', badgeKey: Toothbreaker.key },
  ],
}
