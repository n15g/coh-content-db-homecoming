import { BadgeData } from 'coh-content-db'
import { HeartOfTheCity } from '../exploration/heart-of-the-city'
import { KingsRighteousness } from '../exploration/kings-righteousness'
import { CourageDriven } from '../exploration/courage-driven'
import { FreedomsDefender } from '../exploration/freedoms-defender'
import { HonorableCaptain } from '../exploration/honorable-captain'
import { TalosMight } from '../exploration/talos-might'
import { Cornerstone } from '../exploration/cornerstone'
import { FoundersProtector } from '../exploration/founders-protector'
import { Gatekeeper } from '../exploration/gatekeeper'

export const Stouthearted: BadgeData = {
  type: 'ACCOLADE',
  key: 'stouthearted',
  setTitle: { id: 647 },
  name: [
    { alignment: 'H', value: 'Stouthearted' },
    { alignment: 'V', value: 'Stonehearted' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `You've left no stone unturned in your efforts to protect Paragon City's financial infrastructure. Your diligence is greatly appreciated by all.` },
    { alignment: 'V', value: `No one can explain your turn to villainy after going to such lengths to defend all of Paragon. Perhaps your heart has turned to stone.` },
  ],
  links: [
    { title: 'Stouthearted Badge', href: 'https://homecoming.wiki/wiki/Stouthearted_Badge' },
    { title: 'Stonehearted Badge', href: 'https://homecoming.wiki/wiki/Stonehearted_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/stouthearted.png',
  requirements: [
    { key: HeartOfTheCity.key, type: 'BADGE', badgeKey: HeartOfTheCity.key },
    { key: KingsRighteousness.key, type: 'BADGE', badgeKey: KingsRighteousness.key },
    { key: CourageDriven.key, type: 'BADGE', badgeKey: CourageDriven.key },
    { key: FreedomsDefender.key, type: 'BADGE', badgeKey: FreedomsDefender.key },
    { key: HonorableCaptain.key, type: 'BADGE', badgeKey: HonorableCaptain.key },
    { key: TalosMight.key, type: 'BADGE', badgeKey: TalosMight.key },
    { key: Cornerstone.key, type: 'BADGE', badgeKey: Cornerstone.key },
    { key: FoundersProtector.key, type: 'BADGE', badgeKey: FoundersProtector.key },
    { key: Gatekeeper.key, type: 'BADGE', badgeKey: Gatekeeper.key },
  ],
}
