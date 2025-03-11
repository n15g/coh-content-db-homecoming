import { BadgeData } from 'coh-content-db'

export const PeckingOrder: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'pecking-order',
  setTitle: { id: 2498 },
  name: [
    { value: 'Pecking Order' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You stopped a major technology theft by the Lost, and discovered they have a connection to the Rikti.` },
  ],
  acquisition: `Complete the Stop the Lost attack mission from Eliza Thorpe or Lorenzo Tate`,
  links: [
    { title: 'Pecking Order Badge', href: 'https://homecoming.wiki/wiki/Pecking_Order_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pecking-order.png' },
  ],
}
