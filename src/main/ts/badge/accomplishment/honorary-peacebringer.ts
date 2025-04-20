import { BadgeData } from 'coh-content-db'
import { MoonfireTaskForce } from '../../mission/moonfire-task-force'

export const HonoraryPeacebringer: BadgeData = {
  type: 'accomplishment',
  key: 'honorary-peacebringer',
  setTitleId: [412],
  name: [
    { alignment: 'hero', value: 'Honorary Peacebringer' },
    { alignment: 'villain', value: 'Alien Fighter' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have stopped the Council's plan to infect the populace with Nictus aliens.`,
  links: [
    { title: 'Honorary Peacebringer Badge', href: 'https://homecoming.wiki/wiki/Honorary_Peacebringer_Badge' },
    { title: 'Alien Fighter Badge', href: 'https://homecoming.wiki/wiki/Alien_Fighter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/honorary-peacebringer.png',
  requirements: [
    { key: MoonfireTaskForce.key, type: 'mission', missionKey: MoonfireTaskForce.key },
  ],
}
