import { BadgeData } from 'coh-content-db'
import { Pwnz } from '../accomplishment/pwnz'

export const ChiefSwiper: BadgeData = {
  type: 'GLADIATOR',
  key: 'chief-swiper',
  setTitle: { id: 483 },
  name: [
    { value: 'Chief Swiper' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'Freaks just love to fight -- even for you.' },
  ],
  links: [
    { title: 'Chief Swiper Badge', href: 'https://homecoming.wiki/wiki/Chief_Swiper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Pwnz.key, type: 'BADGE', badgeKey: Pwnz.key },
  ]],
}
