import { BadgeData } from 'coh-content-db'
import { AroundTheBendis } from '../exploration/around-the-bendis'
import { Avatar } from '../exploration/avatar'
import { BloodMoss } from '../exploration/blood-moss'
import { DocWhedon as DocumentWhedon } from '../exploration/doc-whedon'
import { JusticeAvenger } from '../exploration/justice-avenger'
import { NebulasMemory } from '../exploration/nebulas-memory'
import { OpheliasFinalScene } from '../exploration/ophelias-final-scene'
import { Territorial } from '../exploration/territorial'

export const PerezParkPerfection: BadgeData = {
  type: 'accolade',
  key: 'perez-park-perfection',
  setTitleId: [1876],
  name: 'Perez Park Perfection',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Perez Park.`,
  links: [
    { title: 'Perez Park Perfection Badge', href: 'https://homecoming.wiki/wiki/Perez_Park_Perfection_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: AroundTheBendis.key, type: 'badge', badgeKey: AroundTheBendis.key },
    { key: Avatar.key, type: 'badge', badgeKey: Avatar.key },
    { key: BloodMoss.key, type: 'badge', badgeKey: BloodMoss.key },
    { key: DocumentWhedon.key, type: 'badge', badgeKey: DocumentWhedon.key },
    { key: JusticeAvenger.key, type: 'badge', badgeKey: JusticeAvenger.key },
    { key: NebulasMemory.key, type: 'badge', badgeKey: NebulasMemory.key },
    { key: OpheliasFinalScene.key, type: 'badge', badgeKey: OpheliasFinalScene.key },
    { key: Territorial.key, type: 'badge', badgeKey: Territorial.key },
  ],
}
