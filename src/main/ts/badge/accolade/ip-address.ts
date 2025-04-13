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
  type: 'accolade',
  key: 'ip-address',
  setTitleId: [1557],
  name: 'IP Address',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Independence Port.`,
  links: [
    { title: 'IP Address Badge', href: 'https://homecoming.wiki/wiki/IP_Address_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: CreyHavoc.key, type: 'badge', badgeKey: CreyHavoc.key },
    { key: Valorous.key, type: 'badge', badgeKey: Valorous.key },
    { key: Vigorous.key, type: 'badge', badgeKey: Vigorous.key },
    { key: AirLifter.key, type: 'badge', badgeKey: AirLifter.key },
    { key: DeadEnd.key, type: 'badge', badgeKey: DeadEnd.key },
    { key: FamilyPartier.key, type: 'badge', badgeKey: FamilyPartier.key },
    { key: Connector.key, type: 'badge', badgeKey: Connector.key },
    { key: Unlucky.key, type: 'badge', badgeKey: Unlucky.key },
  ],
}
