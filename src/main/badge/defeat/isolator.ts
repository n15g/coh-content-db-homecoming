import { BadgeData } from 'coh-content-db'

export const Isolator: BadgeData = {
  type: 'DEFEAT',
  key: 'isolator',
  setTitle: { id: 39 },
  name: [
    { value: 'Isolator' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: 'You began your career on a high note, by personally ending the riots of contaminated thugs in '
        + 'the Outbreak Zone.',
    },
    {
      alignment: 'V', value: 'When you were first brawling Contaminated in the Outbreak Zone, did you ever think that one '
        + 'day you\'d be known as a villain?',
    },
  ],
  acquisition: 'Defeat 100 Contaminated',
  links: [
    { title: 'Isolator Badge', href: 'https://homecoming.wiki/wiki/Isolator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/isolator.png' },
  ],
}
