import { BadgeData, mapLink } from 'coh-content-db'
import { TheChantry } from '../../map/the-chantry'
import { Bereaved } from '../exploration/bereaved'
import { Demiurge } from '../exploration/demiurge'
import { Dispossessed } from '../exploration/dispossessed'
import { KingOfPain } from '../exploration/king-of-pain'
import { Misbegotten } from '../exploration/misbegotten'
import { Penitent } from '../exploration/penitent'
import { RedFog } from '../exploration/red-fog'
import { Unfettered } from '../exploration/unfettered'

export const CantStopTheChant: BadgeData = {
  type: 'ACCOLADE',
  key: 'cant-stop-the-chant',
  setTitle: { id: 1883 },
  name: [
    { value: 'Can\'t Stop the Chant' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within the Chantry.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(TheChantry)}`,
  links: [
    { title: 'Can\'t Stop the Chant Badge', href: 'https://homecoming.wiki/wiki/Can%27t_Stop_the_Chant_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  requirements: [[
    { key: Bereaved.key, type: 'BADGE', badgeKey: Bereaved.key },
    { key: Demiurge.key, type: 'BADGE', badgeKey: Demiurge.key },
    { key: Dispossessed.key, type: 'BADGE', badgeKey: Dispossessed.key },
    { key: KingOfPain.key, type: 'BADGE', badgeKey: KingOfPain.key },
    { key: Misbegotten.key, type: 'BADGE', badgeKey: Misbegotten.key },
    { key: Penitent.key, type: 'BADGE', badgeKey: Penitent.key },
    { key: RedFog.key, type: 'BADGE', badgeKey: RedFog.key },
    { key: Unfettered.key, type: 'BADGE', badgeKey: Unfettered.key },
  ]],
}
