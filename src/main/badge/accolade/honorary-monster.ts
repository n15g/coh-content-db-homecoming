import { BadgeData } from 'coh-content-db'
import { DarkGarden } from '../exploration/dark-garden'
import { GrimFandango } from '../exploration/grim-fandango'
import { MisfitMonstrosity } from '../exploration/misfit-monstrosity'
import { MonsterFactory } from '../exploration/monster-factory'
import { MonsterIslander } from '../exploration/monster-islander'
import { MonstersPlaythings } from '../exploration/monsters-playthings'
import { RiktiMonkeyIsland } from '../exploration/rikti-monkey-island'
import { TheRoarOfTheBeast } from '../exploration/the-roar-of-the-beast'

export const HonoraryMonster: BadgeData = {
  type: 'ACCOLADE',
  key: 'honorary-monster',
  setTitle: { id: 1891 },
  name: 'Honorary Monster',
  alignment: ['V'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Monster Island.`,
  links: [
    { title: 'Honorary Monster Badge', href: 'https://homecoming.wiki/wiki/Honorary_Monster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: DarkGarden.key, type: 'BADGE', badgeKey: DarkGarden.key },
    { key: GrimFandango.key, type: 'BADGE', badgeKey: GrimFandango.key },
    { key: MisfitMonstrosity.key, type: 'BADGE', badgeKey: MisfitMonstrosity.key },
    { key: MonsterFactory.key, type: 'BADGE', badgeKey: MonsterFactory.key },
    { key: MonsterIslander.key, type: 'BADGE', badgeKey: MonsterIslander.key },
    { key: MonstersPlaythings.key, type: 'BADGE', badgeKey: MonstersPlaythings.key },
    { key: RiktiMonkeyIsland.key, type: 'BADGE', badgeKey: RiktiMonkeyIsland.key },
    { key: TheRoarOfTheBeast.key, type: 'BADGE', badgeKey: TheRoarOfTheBeast.key },
  ],
}
