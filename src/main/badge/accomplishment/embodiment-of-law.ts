import { BadgeData } from 'coh-content-db'

export const EmbodimentOfLaw: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'embodiment-of-law',
  setTitle: { id: 2218 },
  name: [
    { value: 'Embodiment of Law' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You played through Emperor Cole\'s personal story and saw him fight against the entire army of '
        + 'Arachnos.',
    },
  ],
  acquisition: 'Complete the personal story mission from Emperor Cole',
  links: [
    { title: 'Embodiment of Law Badge', href: 'https://homecoming.wiki/wiki/Embodiment_of_Law_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/embodiment-of-law.png' },
  ],
}
