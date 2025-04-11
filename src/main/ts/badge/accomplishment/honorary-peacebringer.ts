import { BadgeData } from 'coh-content-db'
import { Moonfire } from '../../contact/moonfire'

export const HonoraryPeacebringer: BadgeData = {
  type: 'accomplishment',
  key: 'honorary-peacebringer',
  setTitleId: [412],
  name: [
    { alignment: 'hero', value: 'Honorary Peacebringer' },
    { alignment: 'villain', value: 'Alien Fighter' },
  ],
  morality: 'heroic',
  badgeText: `You have stopped the Council's plan to infect the populace with Nictus aliens.`,
  acquisition: 'Complete the Moonfire Task Force: The Kheldian War.',
  links: [
    { title: 'Honorary Peacebringer Badge', href: 'https://homecoming.wiki/wiki/Honorary_Peacebringer_Badge' },
    { title: 'Alien Fighter Badge', href: 'https://homecoming.wiki/wiki/Alien_Fighter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/honorary-peacebringer.png',
  requirements: [
    { key: 'moonfire-task-force', type: 'TASK_FORCE', missionName: 'Moonfire Task Force', contactKey: Moonfire.key },
  ],
}
