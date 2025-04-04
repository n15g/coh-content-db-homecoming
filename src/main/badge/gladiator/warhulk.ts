import { BadgeData } from 'coh-content-db'
import { Meteorologist } from '../accomplishment/meteorologist'

export const Warhulk: BadgeData = {
  type: 'gladiator',
  key: 'warhulk',
  setTitleId: [502],
  name: [
    { value: 'Warhulk' },
  ],
  morality: 'heroic',
  badgeText: [
    { value: 'The Warhulks will fight as your gladiators -- for now.' },
  ],
  links: [
    { title: 'Warhulk Badge', href: 'https://homecoming.wiki/wiki/Warhulk_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Meteorologist.key, type: 'badge', badgeKey: Meteorologist.key },
  ],
}
