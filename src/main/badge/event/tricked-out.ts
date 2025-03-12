import { BadgeData } from 'coh-content-db'

export const TrickedOut: BadgeData = {
  type: 'EVENT',
  key: 'tricked-out',
  setTitle: { id: 2086 },
  name: [
    { value: 'Tricked Out' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You took out the Abomination wearing nothing but a festive Halloween costume!' },
  ],
  acquisition: 'Complete Dr. Kane\'s House of Horror in a Halloween costume during the Halloween event.',
  links: [
    { title: 'Tricked Out Badge', href: 'https://homecoming.wiki/wiki/Tricked_Out_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/tricked-out.png' }],
}
