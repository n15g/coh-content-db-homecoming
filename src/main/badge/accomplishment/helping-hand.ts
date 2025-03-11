import { BadgeData } from 'coh-content-db'

export const HelpingHand: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'helping-hand',
  setTitle: { id: 1893 },
  name: [
    { value: 'Helping Hand' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You\'ve helped to solve the Medi-Porter crisis in Paragon and get the devices distributed to '
        + 'those who need them.',
    },
  ],
  acquisition: 'Complete the story arc from Roy Cooling',
  links: [
    { title: 'Helping Hand Badge', href: 'https://homecoming.wiki/wiki/Helping_Hand_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/helping-hand.png' },
  ],
}
