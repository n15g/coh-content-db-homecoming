import { BadgeData, mapLink } from 'coh-content-db'
import { PeregrineIsland } from '../../map/peregrine-island'

export const AllSeeing: BadgeData = {
  type: 'EXPLORATION',
  key: 'all-seeing',
  setTitle: { id: 1577 },
  name: [{ value: 'All-Seeing' }],
  alignment: ['H'],
  mapKey: PeregrineIsland.key,
  loc: [-712, 56, -2142],
  badgeText: [{
    value: 'Tenants on the top floor in the apartment building have constantly complained that the nearby hero statue makes them feel uneasy.'
      + ' Many say it feels as if someone is constantly watching them.'
      + ' A former tenant claimed to see some sort of video camera in the eyes of the statue, though city officials deny this claim as \'unsubstantiated.\'',
  }],
  notes: `Located in the Poseidon Square neighborhood of ${mapLink(PeregrineIsland)}.

          It is on the top of a fire escape 138 yards southwest of the neighborhood marker.`,
  links: [
    { title: 'All-Seeing Badge', href: 'https://homecoming.wiki/wiki/All-Seeing_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
