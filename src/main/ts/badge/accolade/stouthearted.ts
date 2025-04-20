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
  type: 'accolade',
  key: 'stouthearted',
  setTitleId: [647],
  name: [
    { alignment: 'hero', value: 'Stouthearted' },
    { alignment: 'villain', value: 'Stonehearted' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You've left no stone unturned in your efforts to protect Paragon City's financial infrastructure. Your diligence is greatly appreciated by all.` },
    { alignment: 'villain', value: `No one can explain your turn to villainy after going to such lengths to defend all of Paragon. Perhaps your heart has turned to stone.` },
  ],
  links: [
    { title: 'Stouthearted Badge', href: 'https://homecoming.wiki/wiki/Stouthearted_Badge' },
    { title: 'Stonehearted Badge', href: 'https://homecoming.wiki/wiki/Stonehearted_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/stouthearted.png',
  requirements: [
    { key: HeartOfTheCity.key, type: 'badge', badgeKey: HeartOfTheCity.key },
    { key: KingsRighteousness.key, type: 'badge', badgeKey: KingsRighteousness.key },
    { key: CourageDriven.key, type: 'badge', badgeKey: CourageDriven.key },
    { key: FreedomsDefender.key, type: 'badge', badgeKey: FreedomsDefender.key },
    { key: HonorableCaptain.key, type: 'badge', badgeKey: HonorableCaptain.key },
    { key: TalosMight.key, type: 'badge', badgeKey: TalosMight.key },
    { key: Cornerstone.key, type: 'badge', badgeKey: Cornerstone.key },
    { key: FoundersProtector.key, type: 'badge', badgeKey: FoundersProtector.key },
    { key: Gatekeeper.key, type: 'badge', badgeKey: Gatekeeper.key },
  ],
}
