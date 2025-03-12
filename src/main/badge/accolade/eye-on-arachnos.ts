import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../map/grandville'
import { Overlord } from '../exploration/overlord'
import { SewerDweller } from '../exploration/sewer-dweller'
import { Guttersnipe } from '../exploration/guttersnipe'
import { PassingFab } from '../exploration/passing-fab'
import { ImageCrasher } from '../exploration/image-crasher'
import { LineHolder } from '../exploration/line-holder'
import { GutterBait } from '../exploration/gutter-bait'
import { MasterOfTheAirwaves } from '../exploration/master-of-the-airwaves'

export const EyeOnArachnos: BadgeData = {
  type: 'ACCOLADE',
  key: 'eye-on-arachnos',
  setTitle: { id: 1514 },
  name: [
    { alignment: 'H', value: 'Eye on Arachnos' },
    { alignment: 'V', value: 'Arachnos Spymaster' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Grandville.` },
  ],
  notes: `Visit all exploration badges in [map:${Grandville.key}]`,
  links: [
    { title: 'Eye on Arachnos Badge', href: 'https://homecoming.wiki/wiki/Eye_on_Arachnos_Badge' },
    { title: 'Arachnos Spymaster Badge', href: 'https://homecoming.wiki/wiki/Arachnos_Spymaster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  partials: [
    { key: Overlord.key, type: 'BADGE', badgeKey: Overlord.key },
    { key: SewerDweller.key, type: 'BADGE', badgeKey: SewerDweller.key },
    { key: Guttersnipe.key, type: 'BADGE', badgeKey: Guttersnipe.key },
    { key: MasterOfTheAirwaves.key, type: 'BADGE', badgeKey: MasterOfTheAirwaves.key },
    { key: PassingFab.key, type: 'BADGE', badgeKey: PassingFab.key },
    { key: ImageCrasher.key, type: 'BADGE', badgeKey: ImageCrasher.key },
    { key: LineHolder.key, type: 'BADGE', badgeKey: LineHolder.key },
    { key: GutterBait.key, type: 'BADGE', badgeKey: GutterBait.key },
  ],
}
