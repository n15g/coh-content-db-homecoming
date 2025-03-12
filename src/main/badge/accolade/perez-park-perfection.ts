import { BadgeData } from 'coh-content-db'
import { PerezPark } from '../../map/perez-park'
import { AroundTheBendis } from '../exploration/around-the-bendis'
import { Avatar } from '../exploration/avatar'
import { BloodMoss } from '../exploration/blood-moss'
import { DocWhedon as DocumentWhedon } from '../exploration/doc-whedon'
import { JusticeAvenger } from '../exploration/justice-avenger'
import { NebulasMemory } from '../exploration/nebulas-memory'
import { OpheliasFinalScene } from '../exploration/ophelias-final-scene'
import { Territorial } from '../exploration/territorial'

export const PerezParkPerfection: BadgeData = {
  type: 'ACCOLADE',
  key: 'perez-park-perfection',
  setTitle: { id: 1876 },
  name: [
    { value: 'Perez Park Perfection' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Perez Park.` },
  ],
  notes: `Visit all exploration badges in [map:${PerezPark.key}]`,
  links: [
    { title: 'Perez Park Perfection Badge', href: 'https://homecoming.wiki/wiki/Perez_Park_Perfection_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  partials: [
    { key: AroundTheBendis.key, type: 'BADGE', badgeKey: AroundTheBendis.key },
    { key: Avatar.key, type: 'BADGE', badgeKey: Avatar.key },
    { key: BloodMoss.key, type: 'BADGE', badgeKey: BloodMoss.key },
    { key: DocumentWhedon.key, type: 'BADGE', badgeKey: DocumentWhedon.key },
    { key: JusticeAvenger.key, type: 'BADGE', badgeKey: JusticeAvenger.key },
    { key: NebulasMemory.key, type: 'BADGE', badgeKey: NebulasMemory.key },
    { key: OpheliasFinalScene.key, type: 'BADGE', badgeKey: OpheliasFinalScene.key },
    { key: Territorial.key, type: 'BADGE', badgeKey: Territorial.key },
  ],
}
