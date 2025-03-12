import { BadgeData } from 'coh-content-db'

export const Chatterbox: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'chatterbox',
  setTitle: { id: 2263 },
  name: [
    { value: 'Chatterbox' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You were sent in to handle things on Refugee Island, but you decided to catch up with some old '
        + 'friends from First Ward.',
    },
  ],
  acquisition: 'Speak to four key NPCs from First Ward in the second mission of the first story arc from Provost Marchand',
  links: [
    { title: 'Chatterbox Badge', href: 'https://homecoming.wiki/wiki/Chatterbox_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png' },
  ],
}
