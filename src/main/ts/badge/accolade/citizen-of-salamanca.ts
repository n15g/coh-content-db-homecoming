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
  type: 'accolade',
  key: 'citizen-of-salamanca',
  setTitleId: [1545],
  name: 'Citizen of Salamanca',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Croatoa.`,
  links: [
    { title: 'Citizen of Salamanca Badge', href: 'https://homecoming.wiki/wiki/Citizen_of_Salamanca_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: GrimWanderer.key, type: 'badge', badgeKey: GrimWanderer.key },
    { key: Spiritual.key, type: 'badge', badgeKey: Spiritual.key },
    { key: Ensorcelled.key, type: 'badge', badgeKey: Ensorcelled.key },
    { key: BarrierHolder.key, type: 'badge', badgeKey: BarrierHolder.key },
    { key: SallySightseer.key, type: 'badge', badgeKey: SallySightseer.key },
    { key: JacksWrath.key, type: 'badge', badgeKey: JacksWrath.key },
    { key: WaylonsObserver.key, type: 'badge', badgeKey: WaylonsObserver.key },
    { key: MidnightersPerseverance.key, type: 'badge', badgeKey: MidnightersPerseverance.key },
  ],
}
