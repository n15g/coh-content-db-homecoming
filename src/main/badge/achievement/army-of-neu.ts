import { BadgeData } from 'coh-content-db'

export const ArmyOfNeu: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'army-of-neu',
  setTitle: { id: 1766 },
  name: [
    { value: 'Army of Neu' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You waded through a small army of Neuron\'s clones in order to help push back Praetoria\'s '
        + 'invasion of Primal Earth.',
    },
  ],
  acquisition: 'Defeat 40 of Neuron\'s clones in the third mission of the Tin Mage Mark II Task Force',
  links: [
    { title: 'Army of Neu Badge', href: 'https://homecoming.wiki/wiki/Army_of_Neu_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png' },
  ],
}
