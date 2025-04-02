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
  type: 'ACCOLADE',
  key: 'portal-corp-analyst',
  setTitle: { id: 1579 },
  name: 'Portal Corp Analyst',
  alignment: ['H'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Peregrine Island.`,
  links: [
    { title: 'Portal Corp Analyst Badge', href: 'https://homecoming.wiki/wiki/Portal_Corp_Analyst_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: PortalParter.key, type: 'BADGE', badgeKey: PortalParter.key },
    { key: UseMightForRight.key, type: 'BADGE', badgeKey: UseMightForRight.key },
    { key: CauseForConcern.key, type: 'BADGE', badgeKey: CauseForConcern.key },
    { key: GeneticallyAltered.key, type: 'BADGE', badgeKey: GeneticallyAltered.key },
    { key: RiktiGoneWild.key, type: 'BADGE', badgeKey: RiktiGoneWild.key },
    { key: ShadesOfArachnos.key, type: 'BADGE', badgeKey: ShadesOfArachnos.key },
    { key: AllSeeing.key, type: 'BADGE', badgeKey: AllSeeing.key },
    { key: DarkOmen.key, type: 'BADGE', badgeKey: DarkOmen.key },
  ],
}
