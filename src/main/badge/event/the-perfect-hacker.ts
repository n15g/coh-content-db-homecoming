import { BadgeData } from 'coh-content-db'

export const ThePerfectHacker: BadgeData = {
  type: 'EVENT',
  key: 'the-perfect-hacker',
  setTitle: { id: 2248 },
  name: [
    { value: 'The Perfect Hacker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You performed the role of the Hacker in the Summer Blockbuster \'Casino Heist\' perfectly.' },
  ],
  acquisition: 'In the Summer Blockbuster, perform the role of the Hacker perfectly.',
  notes: 'Awarded to all team-members.\n'
    + '\n'
    + '# Walkthrough\n'
    + 'Click the three computer terminals while not killing the patrol wandering through the room.\n'
    + '\n'
    + 'A character with high defense may be able to click the terminals while under fire, others should try to use stealth and timing.',
  links: [
    { title: 'The Perfect Hacker Badge', href: 'https://homecoming.wiki/wiki/The_Perfect_Hacker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/the-perfect-hacker.png' }],
}
