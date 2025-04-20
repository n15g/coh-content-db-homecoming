import { BadgeData } from 'coh-content-db'
import { OfferSoulOfAkarist } from '../../mission/offer-soul-of-akarist'

export const SoulTaker: BadgeData = {
  type: 'accomplishment',
  key: 'soul-taker',
  setTitleId: [339],
  name: 'Soul Taker',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'The wizard Tarixus taught you dark secrets of the infernal realms in this mission.',
  links: [
    { title: 'Soul Taker Badge', href: 'https://homecoming.wiki/wiki/Soul_Taker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-5.png',
  requirements: [
    { key: OfferSoulOfAkarist.key, type: 'mission', missionKey: OfferSoulOfAkarist.key },
  ],
}
