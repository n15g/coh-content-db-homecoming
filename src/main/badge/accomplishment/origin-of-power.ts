import { BadgeData } from 'coh-content-db'

export const OriginOfPower: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'origin-of-power',
  setTitle: { id: 989 },
  name: [
    { value: 'Origin of Power' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You gain a deeper understanding of the power and history of origins by talking to a '
        + 'representative of each path.',
    },
  ],
  acquisition: 'Complete the Origin of Power story arc from Percy Winkley',
  links: [
    { title: 'Origin of Power Badge', href: 'https://homecoming.wiki/wiki/Origin_of_Power_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/origin-of-power.png' },
  ],
}
