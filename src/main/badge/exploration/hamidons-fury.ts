import { BadgeData, mapLink } from 'coh-content-db'
import { FoundersFalls } from '../../map/founders-falls'

export const HamidonsFury: BadgeData = {
  type: 'EXPLORATION',
  key: 'hamidons-fury',
  setTitle: { id: 1561 },
  name: [{ value: 'Hamidon\'s Fury' }],
  alignment: ['H'],
  mapKey: FoundersFalls.key,
  loc: [26, 0, 3454],
  badgeText: [{
    value: `The hills in this area of Founders' Falls were created almost instantly during the Devouring Earth's initial push into the city.
            A laboratory once stood here, but it was destroyed by the erupting earth that sprung up beneath it.
            If not for the intervention of the city's heroes, the rest of Founders' would have followed.`,
  }],
  notes: `Located in the Blackstone Hills neighborhood of ${mapLink(FoundersFalls)}, 33 yards east of the neighborhood marker.`,
  links: [
    { title: 'Hamidon\'s Fury Badge', href: 'https://homecoming.wiki/wiki/Hamidon%27s_Fury_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
