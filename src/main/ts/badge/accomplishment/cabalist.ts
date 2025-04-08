import { BadgeData } from 'coh-content-db'
import { KatieHannon } from '../../contact/katie-hannon'

export const Cabalist: BadgeData = {
  type: 'accomplishment',
  key: 'cabalist',
  setTitleId: [427],
  name: 'Cabalist',
  morality: 'heroic',
  badgeText: 'You aided the Cabal in their struggle against the loathsome Red Caps.',
  links: [
    { title: 'Cabalist Badge', href: 'https://homecoming.wiki/wiki/Cabalist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/cabalist.png',
  requirements: [
    { key: 'katie-hannon-task-force', type: 'TASK_FORCE', missionName: 'Katie Hannon Task Force', contactKey: KatieHannon.key },
  ],
}
