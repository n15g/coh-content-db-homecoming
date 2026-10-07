import { BadgeData } from 'coh-content-db'
import { PositronTaskForceClassic } from '../../mission/positron-task-force-classic'

export const PositronsRecruit: BadgeData = {
  type: 'accomplishment',
  key: 'positrons-recruit',
  gameId: 'PositronClassicTF',
  setTitleId: [2608],
  name: [
    { alignment: 'hero', value: `Positron's Recruit` },
    { alignment: 'villain', value: `Positron's Regret` },
  ],
  releaseDate: '2026-10-06',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Positron personally selected you to head off a chaotic, three-way plot against the Paragon City Dam.' },
    { alignment: 'villain', value: `Positron once watched your early victories with pride. Nowadays, he considers you his greatest mistake.` },
  ],
  acquisition: 'Complete the original Positron Task Force via Ouroboros.',
  links: [
    { title: `Positron's Recruit Badge`, href: 'https://homecoming.wiki/wiki/Positron%27s_Recruit_Badge' },
    { title: `Positron's Regret Badge`, href: 'https://homecoming.wiki/wiki/Positron%27s_Regret_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/positrons-ally.png',
  requirements: [
    { key: PositronTaskForceClassic.key, type: 'mission', missionKey: PositronTaskForceClassic.key },
  ],
}
