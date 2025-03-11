import { BadgeData } from 'coh-content-db'

export const LovesAChallenge: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'loves-a-challenge',
  setTitle: { id: 1992 },
  name: [
    { value: 'Loves a Challenge' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You successfully faced down Anti-Matter without losing anyone during the fight or destroying '
        + 'his regenerative terminal links during Keyes Island Reactor.',
    },
  ],
  acquisition: 'Complete the Keyes Island Reactor Trial without anyone dying or destroying any terminals during the final battle with Anti-Matter',
  links: [
    { title: 'Loves A Challenge Badge', href: 'https://homecoming.wiki/wiki/Loves_A_Challenge_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png' },
  ],
}
