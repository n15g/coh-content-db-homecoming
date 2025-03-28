import { BadgeData, mapLink } from 'coh-content-db'
import { EchoFaultline } from '../../map/echo-faultline'
import { Newsman } from '../exploration/newsman'
import { FaultlessMystic } from '../exploration/faultless-mystic'
import { Apex } from '../exploration/apex'
import { Forsaken } from '../exploration/forsaken'
import { Pristine } from '../exploration/pristine'
import { ClaimDenied } from '../exploration/claim-denied'
import { SpareParts } from '../exploration/spare-parts'
import { DugTooDeep } from '../exploration/dug-too-deep'

export const Epicenter: BadgeData = {
  type: 'ACCOLADE',
  key: 'epicenter',
  setTitle: { id: 2398 },
  name: [
    { value: 'Epicenter' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Echo: Faultline.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(EchoFaultline)}`,
  links: [
    { title: 'Epicenter Badge', href: 'https://homecoming.wiki/wiki/Epicenter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  requirements: [[
    { key: Newsman.key, type: 'BADGE', badgeKey: Newsman.key },
    { key: FaultlessMystic.key, type: 'BADGE', badgeKey: FaultlessMystic.key },
    { key: Apex.key, type: 'BADGE', badgeKey: Apex.key },
    { key: Forsaken.key, type: 'BADGE', badgeKey: Forsaken.key },
    { key: Pristine.key, type: 'BADGE', badgeKey: Pristine.key },
    { key: ClaimDenied.key, type: 'BADGE', badgeKey: ClaimDenied.key },
    { key: SpareParts.key, type: 'BADGE', badgeKey: SpareParts.key },
    { key: DugTooDeep.key, type: 'BADGE', badgeKey: DugTooDeep.key },
  ]],
}
