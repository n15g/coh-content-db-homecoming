import { BadgeData } from 'coh-content-db'

export const RunningOnEmpty: BadgeData = {
  type: 'DEFEAT',
  key: 'running-on-empty',
  setTitle: { id: 2441 },
  name: [
    { value: 'Running on Empty' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have seen to it that Malta knows their Sapper soldiers are effective and notorious, with how often you have personally targeted their ranks on sight.` },
  ],
  acquisition: 'Defeat 200 Malta Sappers.',
  links: [
    { title: 'Running on Empty Badge', href: 'https://homecoming.wiki/wiki/Running_on_Empty_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/running-on-empty.png' },
  ],
}
