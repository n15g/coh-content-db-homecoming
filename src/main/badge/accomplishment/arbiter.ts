import { BadgeData } from 'coh-content-db'
import { Barracuda } from '../../contact/barracuda'

export const Arbiter: BadgeData = {
  type: 'accomplishment',
  key: 'arbiter',
  setTitleId: [1294],
  name: 'Arbiter',
  morality: 'villainous',
  badgeText: `Taking down Reichsman and making fools out of Lord Recluse's lieutenants might just be the most profitable and satisfying job you've ever pulled.`,
  links: [
    { title: 'Arbiter Badge', href: 'https://homecoming.wiki/wiki/Arbiter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/arbiter.png',
  requirements: [
    { key: 'barracuda-strike-force', type: 'TASK_FORCE', missionName: 'Barracuda Strike Force', contactKey: Barracuda.key },
  ],
}
