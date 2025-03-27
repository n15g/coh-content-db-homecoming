import { BadgeData } from 'coh-content-db'
import { CantTouchThis } from './cant-touch-this'
import { PowerOverwhelming } from './power-overwhelming'
import { RippleRaider } from './ripple-raider'
import { UnfriendlyFire } from './unfriendly-fire'

export const MasterOfDrAeonsStrikeForce: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-dr-aeons-strike-force',
  setTitle: { id: 2482 },
  name: [
    { value: 'Master of Dr. Aeon\'s Strike Force' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You have proven yourself Master of Dr. Aeon's Strike Force.` },
  ],
  links: [
    { title: 'Master of Dr. Aeon\'s Strike Force Badge', href: 'https://homecoming.wiki/wiki/Master_of_Dr._Aeon%27s_Strike_Force_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-dr-aeons-strike-force.png' },
  ],
  partials: [
    { key: CantTouchThis.key, type: 'BADGE', badgeKey: CantTouchThis.key },
    { key: PowerOverwhelming.key, type: 'BADGE', badgeKey: PowerOverwhelming.key },
    { key: RippleRaider.key, type: 'BADGE', badgeKey: RippleRaider.key },
    { key: UnfriendlyFire.key, type: 'BADGE', badgeKey: UnfriendlyFire.key },
  ],
}
