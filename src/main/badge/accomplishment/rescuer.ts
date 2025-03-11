import { BadgeData } from 'coh-content-db'

export const Rescuer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'rescuer',
  setTitle: { id: 696 },
  name: [
    { alignment: 'H', value: 'Rescuer' },
    { alignment: 'V', value: 'Big Softie' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You saved Penelope Yin\'s father from the Lost, and now a thankful Mr. Yin has re-opened Yin\'s Market in Faultline. You can now shop there whenever you want.' },
    { alignment: 'V', value: 'Having saved Penelope Yin brings you no end of scorn from other villains. Before you smash them into oblivion, they call you a Big Softie.' },
  ],
  acquisition: 'The Rescuer accomplishment badge can be earned by completing the Rescue Mr. Yin mission from Penelope Yin.',
  notes: 'All team members get the badge.',
  links: [
    { title: 'Rescuer Badge', href: 'https://homecoming.wiki/wiki/Rescuer_Badge' },
    { title: 'Big Softie Badge', href: 'https://homecoming.wiki/wiki/Big_Softie_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/rescuer.png' }],
}
