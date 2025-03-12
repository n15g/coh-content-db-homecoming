import { BadgeData } from 'coh-content-db'

export const ThePerfectGrifter: BadgeData = {
  type: 'EVENT',
  key: 'the-perfect-grifter',
  setTitle: { id: 2249 },
  name: [
    { value: 'The Perfect Grifter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You performed the role of the Grifter in the Summer Blockbuster \'Casino Heist\' perfectly.' },
  ],
  acquisition: 'In the Summer Blockbuster, perform the role of the Grifter perfectly.',
  notes: 'Awarded to all team-members.\n'
    + '\n'
    + '# Walkthrough\n'
    + '## Phase 1\n'
    + 'Choose **Flirt**, then **Crass**. She will stop talking with you.'
    + 'After a short time, speak with her again. When she agrees to speak with you, say something even more crass. She will express disgust, then turn and walk away.\n'
    + '## Phase 2\n'
    + 'Navigate through all the options for any magazine.',
  links: [
    { title: 'The Perfect Grifter Badge', href: 'https://homecoming.wiki/wiki/The_Perfect_Grifter_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/the-perfect-grifter.png' }],
}
