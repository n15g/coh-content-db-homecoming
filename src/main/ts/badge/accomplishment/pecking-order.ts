import { BadgeData } from 'coh-content-db'
import { StopTheLostAttack } from '../../mission/stop-the-lost-attack'

export const PeckingOrder: BadgeData = {
  type: 'accomplishment',
  key: 'pecking-order',
  setTitleId: [2498],
  name: 'Pecking Order',
  releaseDate: '2020-11-26',
  morality: 'heroic',
  badgeText: `You stopped a major technology theft by the Lost, and discovered they have a connection to the Rikti.`,
  links: [
    { title: 'Pecking Order Badge', href: 'https://homecoming.wiki/wiki/Pecking_Order_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pecking-order.png',
  requirements: [
    { key: StopTheLostAttack.key, type: 'mission', missionKey: StopTheLostAttack.key },
  ],
}
