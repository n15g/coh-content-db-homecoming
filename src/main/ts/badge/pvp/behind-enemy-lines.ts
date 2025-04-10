import { BadgeData, zoneLink } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'
import { SirensCall } from '../../zone/sirens-call'
import { Warburg } from '../../zone/warburg'

export const BehindEnemyLines: BadgeData = {
  type: 'pvp',
  key: 'behind-enemy-lines',
  setTitleId: [2457],
  name: 'Behind Enemy Lines',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have slipped past Arachnos' defenses and thwarted their plans against Freedom Corps.` },
    { alignment: 'villain', value: `You have slipped past Freedom Corps' defenses and disrupted their plans against Arachnos.` },
  ],
  acquisition: `Complete at least one door mission in ${zoneLink(BloodyBay)}, ${zoneLink(SirensCall)} and ${zoneLink(Warburg)}.`,
  notes: `One mission per zone, patrols don't count.`,
  links: [
    { title: 'Behind Enemy Lines Badge', href: 'https://homecoming.wiki/wiki/Behind_Enemy_Lines_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png',
  requirements: [
    { key: BloodyBay.key, type: 'task', location: { zoneKey: BloodyBay.key } },
    { key: SirensCall.key, type: 'task', location: { zoneKey: SirensCall.key } },
    { key: Warburg.key, type: 'task', location: { zoneKey: Warburg.key } },
  ],
}
