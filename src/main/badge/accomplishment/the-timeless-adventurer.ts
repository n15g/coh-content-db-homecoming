import { BadgeData } from 'coh-content-db'

export const TheTimelessAdventurer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-timeless-adventurer',
  setTitle: { id: 2192 },
  name: [
    { value: 'The Timeless Adventurer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You travelled back to Cimerora and saved their civilization from certain destruction by the '
        + 'Talons of Vengeance, though you wonder if you only prolonged the inevitable, given that '
        + 'Cimerora is a lost civilization.',
    },
  ],
  acquisition: 'Complete the story arc from Sister Solaris',
  links: [
    { title: 'The Timeless Adventurer Badge', href: 'https://homecoming.wiki/wiki/The_Timeless_Adventurer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png' },
  ],
}
