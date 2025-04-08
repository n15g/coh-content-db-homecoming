import { BadgeData } from 'coh-content-db'
import { ReformedFirebug } from '../achievement/reformed-firebug'
import { BloodyHands } from '../defeat/bloody-hands'
import { Pedestrian } from '../achievement/pedestrian'
import { ThinLine } from '../defeat/thin-line'
import { Locksmith } from '../defeat/locksmith'
import { AngerManager } from '../defeat/anger-manager'

export const Uninsurable: BadgeData = {
  type: 'accolade',
  key: 'uninsurable',
  setTitleId: [548],
  name: [
    { alignment: 'hero', value: 'Uninsurable' },
    { alignment: 'villain', value: 'Force of Nature' },
  ],
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `The massive destruction you previously wrought has made it really difficult to find anyone willing to insure you for collateral damage liability.` },
    { alignment: 'villain', value: `Paragon City has felt your wrath; you are a true Force of Nature!` },
  ],
  effect: `Awards the Force of Nature power.`,
  links: [
    { title: 'Uninsurable Badge', href: 'https://homecoming.wiki/wiki/Uninsurable_Badge' },
    { title: 'Force of Nature Badge', href: 'https://homecoming.wiki/wiki/Force_of_Nature_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/uninsurable.png',
  requirements: [
    { key: ReformedFirebug.key, type: 'badge', badgeKey: ReformedFirebug.key },
    { key: BloodyHands.key, type: 'badge', badgeKey: BloodyHands.key },
    { key: Pedestrian.key, type: 'badge', badgeKey: Pedestrian.key },
    { key: ThinLine.key, type: 'badge', badgeKey: ThinLine.key },
    { key: Locksmith.key, type: 'badge', badgeKey: Locksmith.key },
    { key: AngerManager.key, type: 'badge', badgeKey: AngerManager.key },
  ],
}
