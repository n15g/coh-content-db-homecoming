import { BadgeData, zoneLink } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'
import { EscapeArtist } from '../exploration/escape-artist'
import { DrownedRat } from '../exploration/drowned-rat'
import { OldFashioned } from '../exploration/old-fashioned'
import { EggHunter } from '../exploration/egg-hunter'
import { Undammed } from '../exploration/undammed'
import { Upcycled } from '../exploration/upcycled'
import { Riveting } from '../exploration/riveting'
import { RockBottom } from '../exploration/rock-bottom'

export const FaultlineFinder: BadgeData = {
  type: 'ACCOLADE',
  key: 'faultline-finder',
  setTitle: { id: 1598 },
  name: [
    { value: 'Faultline Finder' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Faultline.` },
  ],
  notes: `Visit all exploration badges in ${zoneLink(Faultline)}`,
  links: [
    { title: 'Faultline Finder Badge', href: 'https://homecoming.wiki/wiki/Faultline_Finder_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  requirements: [[
    { key: EscapeArtist.key, type: 'BADGE', badgeKey: EscapeArtist.key },
    { key: DrownedRat.key, type: 'BADGE', badgeKey: DrownedRat.key },
    { key: OldFashioned.key, type: 'BADGE', badgeKey: OldFashioned.key },
    { key: EggHunter.key, type: 'BADGE', badgeKey: EggHunter.key },
    { key: Undammed.key, type: 'BADGE', badgeKey: Undammed.key },
    { key: Upcycled.key, type: 'BADGE', badgeKey: Upcycled.key },
    { key: Riveting.key, type: 'BADGE', badgeKey: Riveting.key },
    { key: RockBottom.key, type: 'BADGE', badgeKey: RockBottom.key },
  ]],
}
