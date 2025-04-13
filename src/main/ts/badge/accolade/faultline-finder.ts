import { BadgeData } from 'coh-content-db'
import { EscapeArtist } from '../exploration/escape-artist'
import { DrownedRat } from '../exploration/drowned-rat'
import { OldFashioned } from '../exploration/old-fashioned'
import { EggHunter } from '../exploration/egg-hunter'
import { Undammed } from '../exploration/undammed'
import { Upcycled } from '../exploration/upcycled'
import { Riveting } from '../exploration/riveting'
import { RockBottom } from '../exploration/rock-bottom'

export const FaultlineFinder: BadgeData = {
  type: 'accolade',
  key: 'faultline-finder',
  setTitleId: [1598],
  name: 'Faultline Finder',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Faultline.`,
  links: [
    { title: 'Faultline Finder Badge', href: 'https://homecoming.wiki/wiki/Faultline_Finder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: EscapeArtist.key, type: 'badge', badgeKey: EscapeArtist.key },
    { key: DrownedRat.key, type: 'badge', badgeKey: DrownedRat.key },
    { key: OldFashioned.key, type: 'badge', badgeKey: OldFashioned.key },
    { key: EggHunter.key, type: 'badge', badgeKey: EggHunter.key },
    { key: Undammed.key, type: 'badge', badgeKey: Undammed.key },
    { key: Upcycled.key, type: 'badge', badgeKey: Upcycled.key },
    { key: Riveting.key, type: 'badge', badgeKey: Riveting.key },
    { key: RockBottom.key, type: 'badge', badgeKey: RockBottom.key },
  ],
}
