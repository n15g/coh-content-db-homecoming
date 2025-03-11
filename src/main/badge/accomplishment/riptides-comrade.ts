import { BadgeData } from 'coh-content-db'

export const RiptidesComrade: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'riptides-comrade',
  setTitle: { id: 2265 },
  name: [
    { value: 'Riptide\'s Comrade' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You were able to prevent Riptide from being defeated while he was fighting Nosferatu by '
        + 'himself.',
    },
  ],
  acquisition: 'Complete all objectives in the second mission of the third story arc from Provost Marchand before Riptide is defeated',
  links: [
    { title: 'Riptide\'s Comrade Badge', href: 'https://homecoming.wiki/wiki/Riptide%27s_Comrade_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png' },
  ],
}
