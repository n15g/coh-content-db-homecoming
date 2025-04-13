import { BadgeData } from 'coh-content-db'
import { Overlord } from '../exploration/overlord'
import { SewerDweller } from '../exploration/sewer-dweller'
import { Guttersnipe } from '../exploration/guttersnipe'
import { PassingFab } from '../exploration/passing-fab'
import { ImageCrasher } from '../exploration/image-crasher'
import { LineHolder } from '../exploration/line-holder'
import { GutterBait } from '../exploration/gutter-bait'
import { MasterOfTheAirwaves } from '../exploration/master-of-the-airwaves'

export const EyeOnArachnos: BadgeData = {
  type: 'accolade',
  key: 'eye-on-arachnos',
  setTitleId: [1514],
  name: [
    { alignment: 'hero', value: 'Eye on Arachnos' },
    { alignment: 'villain', value: 'Arachnos Spymaster' },
  ],
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Grandville.`,
  links: [
    { title: 'Eye on Arachnos Badge', href: 'https://homecoming.wiki/wiki/Eye_on_Arachnos_Badge' },
    { title: 'Arachnos Spymaster Badge', href: 'https://homecoming.wiki/wiki/Arachnos_Spymaster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png',
  requirements: [
    { key: Overlord.key, type: 'badge', badgeKey: Overlord.key },
    { key: SewerDweller.key, type: 'badge', badgeKey: SewerDweller.key },
    { key: Guttersnipe.key, type: 'badge', badgeKey: Guttersnipe.key },
    { key: MasterOfTheAirwaves.key, type: 'badge', badgeKey: MasterOfTheAirwaves.key },
    { key: PassingFab.key, type: 'badge', badgeKey: PassingFab.key },
    { key: ImageCrasher.key, type: 'badge', badgeKey: ImageCrasher.key },
    { key: LineHolder.key, type: 'badge', badgeKey: LineHolder.key },
    { key: GutterBait.key, type: 'badge', badgeKey: GutterBait.key },
  ],
}
