import { BadgeData } from 'coh-content-db'
import { VanguardRecruit } from '../day-job/vanguard-recruit'
import { Patroller } from '../day-job/patroller'

export const Mercenary: BadgeData = {
  type: 'ACCOLADE',
  key: 'mercenary',
  setTitle: { id: 1071 },
  name: 'Mercenary',
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: `Your work aiding Vanguard defend Paragon from the ever present Rikti threat and always being ready to aid Paragon City has earned you the Mercenary Accolade.
While logged out in the Vanguard Base you will earn charges for your Fragmentation Grenade Power.`,
    },
    {
      alignment: 'V', value: `Your work aiding Vanguard defeat the ever present Rikti threat and always being ready to spring into action has earned you the Mercenary Accolade.
While logged out in the Vanguard Base you will earn charges for your Fragmentation Grenade Power.`,
    },
  ],
  links: [
    { title: 'Mercenary Badge', href: 'https://homecoming.wiki/wiki/Mercenary_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/mercenary.png',
  requirements: [
    { key: VanguardRecruit.key, type: 'BADGE', badgeKey: VanguardRecruit.key },
    { key: Patroller.key, type: 'BADGE', badgeKey: Patroller.key },
  ],
}
