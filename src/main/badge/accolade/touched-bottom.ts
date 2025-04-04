import { BadgeData } from 'coh-content-db'
import { AbyssalGaze } from '../exploration/abyssal-gaze'
import { CagedBeast } from '../exploration/caged-beast'
import { Geneticist } from '../exploration/geneticist'
import { HamidonsIre } from '../exploration/hamidons-ire'
import { HereBeDragons } from '../exploration/here-be-dragons'
import { NoEscape } from '../exploration/no-escape'
import { Reborn } from '../exploration/reborn'
import { TheTreeOfWoe } from '../exploration/the-tree-of-woe'

export const TouchedBottom: BadgeData = {
  type: 'accolade',
  key: 'touched-bottom',
  setTitleId: [1890],
  name: 'Touched Bottom',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within the Abyss.`,
  links: [
    { title: 'Touched Bottom Badge', href: 'https://homecoming.wiki/wiki/Touched_Bottom_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: AbyssalGaze.key, type: 'badge', badgeKey: AbyssalGaze.key },
    { key: CagedBeast.key, type: 'badge', badgeKey: CagedBeast.key },
    { key: Geneticist.key, type: 'badge', badgeKey: Geneticist.key },
    { key: HamidonsIre.key, type: 'badge', badgeKey: HamidonsIre.key },
    { key: HereBeDragons.key, type: 'badge', badgeKey: HereBeDragons.key },
    { key: NoEscape.key, type: 'badge', badgeKey: NoEscape.key },
    { key: Reborn.key, type: 'badge', badgeKey: Reborn.key },
    { key: TheTreeOfWoe.key, type: 'badge', badgeKey: TheTreeOfWoe.key },
  ],
}
