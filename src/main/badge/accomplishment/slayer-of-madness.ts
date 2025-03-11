import { BadgeData } from 'coh-content-db'

export const SlayerOfMadness: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'slayer-of-madness',
  setTitle: { id: 426 },
  name: [
    { value: 'Slayer of Madness' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You defeated the being known as Lanaru the Mad, sparing the people of the Shadow Shard from '
        + 'total destruction.',
    },
  ],
  acquisition: 'Complete the Faathim the Kind Task Force: The Saga of Lanaru',
  links: [
    { title: 'Slayer of Madness Badge', href: 'https://homecoming.wiki/wiki/Slayer_of_Madness_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/slayer-of-madness.png' },
  ],
}
