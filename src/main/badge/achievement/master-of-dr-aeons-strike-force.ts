import { BadgeData } from 'coh-content-db'
import { CantTouchThis } from './cant-touch-this'
import { PowerOverwhelming } from './power-overwhelming'
import { RippleRaider } from './ripple-raider'
import { UnfriendlyFire } from './unfriendly-fire'

export const MasterOfDrAeonsStrikeForce: BadgeData = {
  type: 'achievement',
  key: 'master-of-dr-aeons-strike-force',
  setTitleId: [2482],
  name: `Master of Dr. Aeon's Strike Force`,
  morality: 'villainous',
  badgeText: `You have proven yourself Master of Dr. Aeon's Strike Force.`,
  links: [
    { title: `Master of Dr. Aeon's Strike Force Badge`, href: 'https://homecoming.wiki/wiki/Master_of_Dr._Aeon%27s_Strike_Force_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-dr-aeons-strike-force.png',
  requirements: [
    { key: CantTouchThis.key, type: 'badge', badgeKey: CantTouchThis.key },
    { key: PowerOverwhelming.key, type: 'badge', badgeKey: PowerOverwhelming.key },
    { key: RippleRaider.key, type: 'badge', badgeKey: RippleRaider.key },
    { key: UnfriendlyFire.key, type: 'badge', badgeKey: UnfriendlyFire.key },
  ],
}
