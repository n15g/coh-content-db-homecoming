import { BadgeData } from 'coh-content-db'
import { MrGPrimal } from '../../contact/mr-g-primal'

export const WarCriminal: BadgeData = {
  type: 'accomplishment',
  key: 'war-criminal',
  setTitleId: [2258],
  name: 'War Criminal',
  morality: 'villainous',
  badgeText: 'You worked together with Mr. G to break out several criminals of war from Vanguard custody.',
  acquisition: 'Complete the first story arc from Mr. G (Primal Earth).',
  links: [
    { title: 'War Criminal Badge', href: 'https://homecoming.wiki/wiki/War_Criminal_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png',
  requirements: [
    { key: 'cow', type: 'ARC', missionName: 'Criminals of War', contactKey: MrGPrimal.key },
  ],
}
