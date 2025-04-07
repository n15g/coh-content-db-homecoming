import { BadgeData, zoneLink } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const HamidonsFury: BadgeData = {
  type: 'exploration',
  key: 'hamidons-fury',
  setTitleId: [1561],
  name: `Hamidon's Fury`,
  morality: 'heroic',
  zoneKey: FoundersFalls.key,
  loc: [26, 0, 3454],
  badgeText: `The hills in this area of Founders' Falls were created almost instantly during the Devouring Earth's initial push into the city.
A laboratory once stood here, but it was destroyed by the erupting earth that sprung up beneath it.
If not for the intervention of the city's heroes, the rest of Founders' would have followed.`,
  notes: `Located in the Blackstone Hills neighborhood of ${zoneLink(FoundersFalls)}, 33 yards east of the neighborhood marker.`,
  links: [
    { title: `Hamidon's Fury Badge`, href: 'https://homecoming.wiki/wiki/Hamidon%27s_Fury_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '6',
}
