import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { ElizaThorpe } from '../../contact/eliza-thorpe'
import { LorenzoTate } from '../../contact/lorenzo-tate'

export const PeckingOrder: BadgeData = {
  type: 'accomplishment',
  key: 'pecking-order',
  setTitleId: [2498],
  name: 'Pecking Order',
  morality: 'heroic',
  badgeText: `You stopped a major technology theft by the Lost, and discovered they have a connection to the Rikti.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Lost Motivation" entry with number 0.42 in the 25-29 level range.`,
  links: [
    { title: 'Pecking Order Badge', href: 'https://homecoming.wiki/wiki/Pecking_Order_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pecking-order.png',
  requirements: [
    { key: 'stla', type: 'MISSION', missionName: 'Stop the Lost Attack', contactKey: [ElizaThorpe.key, LorenzoTate.key] },
  ],
}
