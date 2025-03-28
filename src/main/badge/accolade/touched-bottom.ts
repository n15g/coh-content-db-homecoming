import { BadgeData, mapLink } from 'coh-content-db'
import { TheAbyss } from '../../map/the-abyss'
import { AbyssalGaze } from '../exploration/abyssal-gaze'
import { CagedBeast } from '../exploration/caged-beast'
import { Geneticist } from '../exploration/geneticist'
import { HamidonsIre } from '../exploration/hamidons-ire'
import { HereBeDragons } from '../exploration/here-be-dragons'
import { NoEscape } from '../exploration/no-escape'
import { Reborn } from '../exploration/reborn'
import { TheTreeOfWoe } from '../exploration/the-tree-of-woe'

export const TouchedBottom: BadgeData = {
  type: 'ACCOLADE',
  key: 'touched-bottom',
  setTitle: { id: 1890 },
  name: [
    { value: 'Touched Bottom' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within the Abyss.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(TheAbyss)}`,
  links: [
    { title: 'Touched Bottom Badge', href: 'https://homecoming.wiki/wiki/Touched_Bottom_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  requirements: [[
    { key: AbyssalGaze.key, type: 'BADGE', badgeKey: AbyssalGaze.key },
    { key: CagedBeast.key, type: 'BADGE', badgeKey: CagedBeast.key },
    { key: Geneticist.key, type: 'BADGE', badgeKey: Geneticist.key },
    { key: HamidonsIre.key, type: 'BADGE', badgeKey: HamidonsIre.key },
    { key: HereBeDragons.key, type: 'BADGE', badgeKey: HereBeDragons.key },
    { key: NoEscape.key, type: 'BADGE', badgeKey: NoEscape.key },
    { key: Reborn.key, type: 'BADGE', badgeKey: Reborn.key },
    { key: TheTreeOfWoe.key, type: 'BADGE', badgeKey: TheTreeOfWoe.key },
  ]],
}
