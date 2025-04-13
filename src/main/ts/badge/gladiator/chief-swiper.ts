import { BadgeData } from 'coh-content-db'
import { Pwnz } from '../accomplishment/pwnz'

export const ChiefSwiper: BadgeData = {
  type: 'gladiator',
  key: 'chief-swiper',
  setTitleId: [483],
  name: 'Chief Swiper',
  morality: 'heroic',
  badgeText: 'Freaks just love to fight -- even for you.',
  links: [
    { title: 'Chief Swiper Badge', href: 'https://homecoming.wiki/wiki/Chief_Swiper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Pwnz.key, type: 'badge', badgeKey: Pwnz.key },
  ],
}
