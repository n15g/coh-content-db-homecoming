import { BadgeData } from 'coh-content-db'

export const Frontline: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'frontline',
  setTitle: { id: 81 },
  name: [
    { value: 'Frontline' },
  ],
  alignment: ['H'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/frontline.png' }],
  badgeText: [
    { value: 'You stopped a battle between the Circle of Thorns and the Oranbegans from another dimension.' },
  ],
  acquisition: 'Complete the Stop the Circle of Thorns from contacting an alternate world mission from Cadao Kestrel',
  links: [
    { title: 'Frontline Badge', href: 'https://homecoming.wiki/wiki/Frontline_Badge' },
  ],
}
