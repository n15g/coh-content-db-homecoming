import { BadgeData } from 'coh-content-db'
import { VanguardRecruit } from '../day-job/vanguard-recruit'
import { Patroller } from '../day-job/patroller'

export const Mercenary: BadgeData = {
  type: 'accolade',
  key: 'mercenary',
  setTitleId: [1071],
  name: 'Mercenary',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `Your work aiding Vanguard defend Paragon from the ever present Rikti threat and always being ready to aid Paragon City has earned you the Mercenary Accolade.
While logged out in the Vanguard Base you will earn charges for your Fragmentation Grenade Power.`,
    },
    {
      alignment: 'villain', value: `Your work aiding Vanguard defeat the ever present Rikti threat and always being ready to spring into action has earned you the Mercenary Accolade.
While logged out in the Vanguard Base you will earn charges for your Fragmentation Grenade Power.`,
    },
  ],
  links: [
    { title: 'Mercenary Badge', href: 'https://homecoming.wiki/wiki/Mercenary_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/mercenary.png',
  requirements: [
    { key: VanguardRecruit.key, type: 'badge', badgeKey: VanguardRecruit.key },
    { key: Patroller.key, type: 'badge', badgeKey: Patroller.key },
  ],
}
