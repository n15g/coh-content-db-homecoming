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
  type: 'ACCOLADE',
  key: 'return-visitor',
  setTitle: { id: 551 },
  name: [
    { alignment: 'H', value: 'Return Visitor' },
    { alignment: 'V', value: 'Invader' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `You've seen a lot of Paragon from the other side already, so you've got a head start on making your new life here.` },
    { alignment: 'V', value: `No corner of Paragon City is safe from your destruction!` },
  ],
  notes: `Awards +5% Max Health`,
  links: [
    { title: 'Return Visitor Badge', href: 'https://homecoming.wiki/wiki/Return_Visitor_Badge' },
    { title: 'Invader Badge', href: 'https://homecoming.wiki/wiki/Invader_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/return-visitor.png' },
  ],
  effect: `+5% Max Health`,
  partials: [
    { key: Libertarian.key, type: 'BADGE', badgeKey: Libertarian.key },
    { key: Brickhouse.key, type: 'BADGE', badgeKey: Brickhouse.key },
    { key: GateCloser.key, type: 'BADGE', badgeKey: GateCloser.key },
    { key: GlobalGuardian.key, type: 'BADGE', badgeKey: GlobalGuardian.key },
    { key: KingMaker.key, type: 'BADGE', badgeKey: KingMaker.key },
    { key: RoadRaged.key, type: 'BADGE', badgeKey: RoadRaged.key },
    { key: SteelWorker.key, type: 'BADGE', badgeKey: SteelWorker.key },
    { key: TalonOfTalos.key, type: 'BADGE', badgeKey: TalonOfTalos.key },
    { key: Revolutionary.key, type: 'BADGE', badgeKey: Revolutionary.key },
  ],
}
