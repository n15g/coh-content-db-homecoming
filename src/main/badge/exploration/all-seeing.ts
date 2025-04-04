import { BadgeData } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const AllSeeing: BadgeData = {
  type: 'exploration',
  key: 'all-seeing',
  setTitleId: [1577],
  name: 'All-Seeing',
  morality: 'heroic',
  zoneKey: PeregrineIsland.key,
  loc: [-712, 56, -2142],
  badgeText: `Tenants on the top floor in the apartment building have constantly complained that the nearby hero statue makes them feel uneasy.
Many say it feels as if someone is constantly watching them.
A former tenant claimed to see some sort of video camera in the eyes of the statue, though city officials deny this claim as 'unsubstantiated.'`,
  notes: `Located in the Poseidon Square neighborhood. on the top of a fire escape 138 yards southwest of the neighborhood marker.`,
  links: [
    { title: 'All-Seeing Badge', href: 'https://homecoming.wiki/wiki/All-Seeing_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '7',
}
