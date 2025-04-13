import { BadgeData } from 'coh-content-db'
import { BarracudaStrikeForce } from '../../mission/barracuda-strike-force'

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
    { key: BarracudaStrikeForce.key, type: 'mission', missionKey: BarracudaStrikeForce.key },
  ],
}
