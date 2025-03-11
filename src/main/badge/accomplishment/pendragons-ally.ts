import { BadgeData } from 'coh-content-db'

export const PendragonsAlly: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'pendragons-ally',
  setTitle: { id: 2264 },
  name: [
    { value: 'Pendragon\'s Ally' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You were able to keep Pendragon from being defeated while he was fighting Maestro by himself.' },
  ],
  acquisition: 'Complete all objectives in the first mission of the third story arc from Provost Marchand before Pendragon is defeated',
  links: [
    { title: 'Pendragon\'s Ally Badge', href: 'https://homecoming.wiki/wiki/Pendragon%27s_Ally_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png' },
  ],
}
