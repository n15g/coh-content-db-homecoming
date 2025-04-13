import { BadgeData } from 'coh-content-db'
import { Mystic } from '../exploration/mystic'
import { Inmate } from '../exploration/inmate'
import { FlyingShark } from '../exploration/flying-shark'
import { Fugitive } from '../exploration/fugitive'
import { ForwardThinker } from '../exploration/forward-thinker'
import { SecretPath } from '../exploration/secret-path'
import { SixthPassenger } from '../exploration/sixth-passenger'
import { Unsubtle } from '../exploration/unsubtle'

export const ZigWarden: BadgeData = {
  type: 'accolade',
  key: 'zig-warden',
  setTitleId: [1571],
  name: [
    { alignment: 'hero', value: 'Zig Warden' },
    { alignment: 'villain', sex: 'M', value: 'King of the Zig' },
    { alignment: 'villain', sex: 'F', value: 'Queen of the Zig' },
  ],
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Brickstown.`,
  links: [
    { title: 'Zig Warden Badge', href: 'https://homecoming.wiki/wiki/Zig_Warden_Badge' },
    { title: 'King of the Zig Badge', href: 'https://homecoming.wiki/wiki/King_of_the_Zig_Badge' },
    { title: 'Queen of the Zig Badge', href: 'https://homecoming.wiki/wiki/Queen_of_the_Zig_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Mystic.key, type: 'badge', badgeKey: Mystic.key },
    { key: Inmate.key, type: 'badge', badgeKey: Inmate.key },
    { key: FlyingShark.key, type: 'badge', badgeKey: FlyingShark.key },
    { key: Fugitive.key, type: 'badge', badgeKey: Fugitive.key },
    { key: ForwardThinker.key, type: 'badge', badgeKey: ForwardThinker.key },
    { key: SecretPath.key, type: 'badge', badgeKey: SecretPath.key },
    { key: SixthPassenger.key, type: 'badge', badgeKey: SixthPassenger.key },
    { key: Unsubtle.key, type: 'badge', badgeKey: Unsubtle.key },
  ],
}
