import { BadgeData, zoneLink } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'
import { Mystic } from '../exploration/mystic'
import { Inmate } from '../exploration/inmate'
import { FlyingShark } from '../exploration/flying-shark'
import { Fugitive } from '../exploration/fugitive'
import { ForwardThinker } from '../exploration/forward-thinker'
import { SecretPath } from '../exploration/secret-path'
import { SixthPassenger } from '../exploration/sixth-passenger'
import { Unsubtle } from '../exploration/unsubtle'

export const ZigWarden: BadgeData = {
  type: 'ACCOLADE',
  key: 'zig-warden',
  setTitle: { id: 1571 },
  name: [
    { alignment: 'H', value: 'Zig Warden' },
    { alignment: 'V', sex: 'M', value: 'King of the Zig' },
    { alignment: 'V', sex: 'F', value: 'Queen of the Zig' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Brickstown.` },
  ],
  notes: `Visit all exploration badges in ${zoneLink(Brickstown)}.`,
  links: [
    { title: 'Zig Warden Badge', href: 'https://homecoming.wiki/wiki/Zig_Warden_Badge' },
    { title: 'King of the Zig Badge', href: 'https://homecoming.wiki/wiki/King_of_the_Zig_Badge' },
    { title: 'Queen of the Zig Badge', href: 'https://homecoming.wiki/wiki/Queen_of_the_Zig_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  requirements: [[
    { key: Mystic.key, type: 'BADGE', badgeKey: Mystic.key },
    { key: Inmate.key, type: 'BADGE', badgeKey: Inmate.key },
    { key: FlyingShark.key, type: 'BADGE', badgeKey: FlyingShark.key },
    { key: Fugitive.key, type: 'BADGE', badgeKey: Fugitive.key },
    { key: ForwardThinker.key, type: 'BADGE', badgeKey: ForwardThinker.key },
    { key: SecretPath.key, type: 'BADGE', badgeKey: SecretPath.key },
    { key: SixthPassenger.key, type: 'BADGE', badgeKey: SixthPassenger.key },
    { key: Unsubtle.key, type: 'BADGE', badgeKey: Unsubtle.key },
  ]],
}
