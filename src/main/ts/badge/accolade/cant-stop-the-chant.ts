import { BadgeData } from 'coh-content-db'
import { Bereaved } from '../exploration/bereaved'
import { Demiurge } from '../exploration/demiurge'
import { Dispossessed } from '../exploration/dispossessed'
import { KingOfPain } from '../exploration/king-of-pain'
import { Misbegotten } from '../exploration/misbegotten'
import { Penitent } from '../exploration/penitent'
import { RedFog } from '../exploration/red-fog'
import { Unfettered } from '../exploration/unfettered'

export const CantStopTheChant: BadgeData = {
  type: 'accolade',
  key: 'cant-stop-the-chant',
  setTitleId: [1883],
  name: `Can't Stop the Chant`,
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within the Chantry.`,
  links: [
    { title: `Can't Stop the Chant Badge`, href: 'https://homecoming.wiki/wiki/Can%27t_Stop_the_Chant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: Bereaved.key, type: 'badge', badgeKey: Bereaved.key },
    { key: Demiurge.key, type: 'badge', badgeKey: Demiurge.key },
    { key: Dispossessed.key, type: 'badge', badgeKey: Dispossessed.key },
    { key: KingOfPain.key, type: 'badge', badgeKey: KingOfPain.key },
    { key: Misbegotten.key, type: 'badge', badgeKey: Misbegotten.key },
    { key: Penitent.key, type: 'badge', badgeKey: Penitent.key },
    { key: RedFog.key, type: 'badge', badgeKey: RedFog.key },
    { key: Unfettered.key, type: 'badge', badgeKey: Unfettered.key },
  ],
}
