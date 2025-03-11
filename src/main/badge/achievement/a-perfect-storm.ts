import { BadgeData } from 'coh-content-db'

export const APerfectStorm: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'a-perfect-storm',
  setTitle: { id: 2080 },
  name: [
    { value: 'A Perfect Storm' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Despite the furious typhoon of psychic energy enveloping you within Mother Yin\'s layer of the '
        + 'Minds of Mayhem, you were able to keep calm, efficiently using the precious Eyes of the Storm '
        + 'to put an end to Mother Mayhem\'s hold on Penelope Yin.',
    },
  ],
  acquisition: 'Defeat Mother Yin while creating no more than 4 Eyes of the Storm, then complete the trial',
  links: [
    { title: 'A Perfect Storm Badge', href: 'https://homecoming.wiki/wiki/A_Perfect_Storm_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-mom.png' },
  ],
}
