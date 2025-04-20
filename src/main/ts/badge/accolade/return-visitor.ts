import { BadgeData } from 'coh-content-db'
import { Brickhouse } from '../exploration/brickhouse'
import { KingMaker } from '../exploration/king-maker'
import { RoadRaged } from '../exploration/road-raged'
import { SteelWorker } from '../exploration/steel-worker'
import { TalonOfTalos } from '../exploration/talon-of-talos'
import { Libertarian } from '../exploration/libertarian'
import { GateCloser } from '../exploration/gate-closer'
import { GlobalGuardian } from '../exploration/global-guardian'
import { Revolutionary } from '../exploration/revolutionary'

export const ReturnVisitor: BadgeData = {
  type: 'accolade',
  key: 'return-visitor',
  setTitleId: [551],
  name: [
    { alignment: 'hero', value: 'Return Visitor' },
    { alignment: 'villain', value: 'Invader' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `You've seen a lot of Paragon from the other side already, so you've got a head start on making your new life here.` },
    { alignment: 'villain', value: `No corner of Paragon City is safe from your destruction!` },
  ],
  effect: 'Awards +5% Max Health.',
  links: [
    { title: 'Return Visitor Badge', href: 'https://homecoming.wiki/wiki/Return_Visitor_Badge' },
    { title: 'Invader Badge', href: 'https://homecoming.wiki/wiki/Invader_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/return-visitor.png',
  requirements: [
    { key: Libertarian.key, type: 'badge', badgeKey: Libertarian.key },
    { key: Brickhouse.key, type: 'badge', badgeKey: Brickhouse.key },
    { key: GateCloser.key, type: 'badge', badgeKey: GateCloser.key },
    { key: GlobalGuardian.key, type: 'badge', badgeKey: GlobalGuardian.key },
    { key: KingMaker.key, type: 'badge', badgeKey: KingMaker.key },
    { key: RoadRaged.key, type: 'badge', badgeKey: RoadRaged.key },
    { key: SteelWorker.key, type: 'badge', badgeKey: SteelWorker.key },
    { key: TalonOfTalos.key, type: 'badge', badgeKey: TalonOfTalos.key },
    { key: Revolutionary.key, type: 'badge', badgeKey: Revolutionary.key },
  ],
}
