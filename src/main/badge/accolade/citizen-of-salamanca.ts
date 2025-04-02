import { BadgeData } from 'coh-content-db'
import { GrimWanderer } from '../exploration/grim-wanderer'
import { Spiritual } from '../exploration/spiritual'
import { Ensorcelled } from '../exploration/ensorcelled'
import { BarrierHolder } from '../exploration/barrier-holder'
import { SallySightseer } from '../exploration/sally-sightseer'
import { JacksWrath } from '../exploration/jacks-wrath'
import { WaylonsObserver } from '../exploration/waylons-observer'
import { MidnightersPerseverance } from '../exploration/midnighters-perseverance'

export const CitizenOfSalamanca: BadgeData = {
  type: 'ACCOLADE',
  key: 'citizen-of-salamanca',
  setTitle: { id: 1545 },
  name: 'Citizen of Salamanca',
  alignment: ['H'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Croatoa.`,
  links: [
    { title: 'Citizen of Salamanca Badge', href: 'https://homecoming.wiki/wiki/Citizen_of_Salamanca_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: GrimWanderer.key, type: 'BADGE', badgeKey: GrimWanderer.key },
    { key: Spiritual.key, type: 'BADGE', badgeKey: Spiritual.key },
    { key: Ensorcelled.key, type: 'BADGE', badgeKey: Ensorcelled.key },
    { key: BarrierHolder.key, type: 'BADGE', badgeKey: BarrierHolder.key },
    { key: SallySightseer.key, type: 'BADGE', badgeKey: SallySightseer.key },
    { key: JacksWrath.key, type: 'BADGE', badgeKey: JacksWrath.key },
    { key: WaylonsObserver.key, type: 'BADGE', badgeKey: WaylonsObserver.key },
    { key: MidnightersPerseverance.key, type: 'BADGE', badgeKey: MidnightersPerseverance.key },
  ],
}
