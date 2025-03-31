import { BadgeData } from 'coh-content-db'
import { CreyHavoc } from '../exploration/crey-havoc'
import { Valorous } from '../exploration/valorous'
import { Vigorous } from '../exploration/vigorous'
import { AirLifter } from '../exploration/air-lifter'
import { DeadEnd } from '../exploration/dead-end'
import { FamilyPartier } from '../exploration/family-partier'
import { Connector } from '../exploration/connector'
import { Unlucky } from '../exploration/unlucky'

export const IPAddress: BadgeData = {
  type: 'ACCOLADE',
  key: 'ip-address',
  setTitle: { id: 1557 },
  name: [
    { value: 'IP Address' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Independence Port.` },
  ],
  links: [
    { title: 'IP Address Badge', href: 'https://homecoming.wiki/wiki/IP_Address_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  requirements: [[
    { key: CreyHavoc.key, type: 'BADGE', badgeKey: CreyHavoc.key },
    { key: Valorous.key, type: 'BADGE', badgeKey: Valorous.key },
    { key: Vigorous.key, type: 'BADGE', badgeKey: Vigorous.key },
    { key: AirLifter.key, type: 'BADGE', badgeKey: AirLifter.key },
    { key: DeadEnd.key, type: 'BADGE', badgeKey: DeadEnd.key },
    { key: FamilyPartier.key, type: 'BADGE', badgeKey: FamilyPartier.key },
    { key: Connector.key, type: 'BADGE', badgeKey: Connector.key },
    { key: Unlucky.key, type: 'BADGE', badgeKey: Unlucky.key },
  ]],
}
