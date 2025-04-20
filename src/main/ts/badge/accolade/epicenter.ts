import { BadgeData } from 'coh-content-db'
import { Newsman } from '../exploration/newsman'
import { FaultlessMystic } from '../exploration/faultless-mystic'
import { Apex } from '../exploration/apex'
import { Forsaken } from '../exploration/forsaken'
import { Pristine } from '../exploration/pristine'
import { ClaimDenied } from '../exploration/claim-denied'
import { SpareParts } from '../exploration/spare-parts'
import { DugTooDeep } from '../exploration/dug-too-deep'

export const Epicenter: BadgeData = {
  type: 'accolade',
  key: 'epicenter',
  setTitleId: [2398],
  name: 'Epicenter',
  releaseDate: '2019-06-01',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Echo: Faultline.`,
  links: [
    { title: 'Epicenter Badge', href: 'https://homecoming.wiki/wiki/Epicenter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Newsman.key, type: 'badge', badgeKey: Newsman.key },
    { key: FaultlessMystic.key, type: 'badge', badgeKey: FaultlessMystic.key },
    { key: Apex.key, type: 'badge', badgeKey: Apex.key },
    { key: Forsaken.key, type: 'badge', badgeKey: Forsaken.key },
    { key: Pristine.key, type: 'badge', badgeKey: Pristine.key },
    { key: ClaimDenied.key, type: 'badge', badgeKey: ClaimDenied.key },
    { key: SpareParts.key, type: 'badge', badgeKey: SpareParts.key },
    { key: DugTooDeep.key, type: 'badge', badgeKey: DugTooDeep.key },
  ],
}
