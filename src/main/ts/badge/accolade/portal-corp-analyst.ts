import { BadgeData } from 'coh-content-db'
import { PortalParter } from '../exploration/portal-parter'
import { UseMightForRight } from '../exploration/use-might-for-right'
import { CauseForConcern } from '../exploration/cause-for-concern'
import { GeneticallyAltered } from '../exploration/genetically-altered'
import { RiktiGoneWild } from '../exploration/rikti-gone-wild'
import { ShadesOfArachnos } from '../exploration/shades-of-arachnos'
import { AllSeeing } from '../exploration/all-seeing'
import { DarkOmen } from '../exploration/dark-omen'

export const PortalCorpAnalyst: BadgeData = {
  type: 'accolade',
  key: 'portal-corp-analyst',
  setTitleId: [1579],
  name: 'Portal Corp Analyst',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Peregrine Island.`,
  links: [
    { title: 'Portal Corp Analyst Badge', href: 'https://homecoming.wiki/wiki/Portal_Corp_Analyst_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: PortalParter.key, type: 'badge', badgeKey: PortalParter.key },
    { key: UseMightForRight.key, type: 'badge', badgeKey: UseMightForRight.key },
    { key: CauseForConcern.key, type: 'badge', badgeKey: CauseForConcern.key },
    { key: GeneticallyAltered.key, type: 'badge', badgeKey: GeneticallyAltered.key },
    { key: RiktiGoneWild.key, type: 'badge', badgeKey: RiktiGoneWild.key },
    { key: ShadesOfArachnos.key, type: 'badge', badgeKey: ShadesOfArachnos.key },
    { key: AllSeeing.key, type: 'badge', badgeKey: AllSeeing.key },
    { key: DarkOmen.key, type: 'badge', badgeKey: DarkOmen.key },
  ],
}
