import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../map/bloody-bay'
import { SirensCall } from '../../map/sirens-call'
import { Warburg } from '../../map/warburg'

export const BehindEnemyLines: BadgeData = {
  type: 'PVP',
  key: 'behind-enemy-lines',
  setTitle: { id: 2457 },
  name: [
    { value: 'Behind Enemy Lines' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have slipped past Arachnos\' defenses and thwarted their plans against Freedom Corps.' },
    { alignment: 'V', value: 'You have slipped past Freedom Corps\' defenses and disrupted their plans against Arachnos.' },
  ],
  acquisition: `Complete at least one door mission in [map:${BloodyBay.key}], [map:${SirensCall.key}] and [map:${Warburg.key}].`,
  notes: 'One mission per zone, patrols don\'t count.',
  links: [
    { title: 'Behind Enemy Lines Badge', href: 'https://homecoming.wiki/wiki/Behind_Enemy_Lines_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png' },
  ],
}
