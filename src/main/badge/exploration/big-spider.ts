import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const BigSpider: BadgeData = {
  type: 'exploration',
  key: 'big-spider',
  setTitleId: [1488],
  name: 'Big Spider',
  morality: 'villainous',
  zoneKey: PortOakes.key,
  loc: [-1023, 97, -896],
  badgeText: `This towering skyscraper used to belong to the Marcones before Arachnos seized it for the purpose of "overseeing operations in Port Oakes." The Marcones have been bitter about it ever since.`,
  notes: `Located in the Marconeville neighborhood, at the base of the stairs in front of the Supergroup building, 54 yards north of the neighborhood marker.`,
  links: [
    { title: 'Big Spider Badge', href: 'https://homecoming.wiki/wiki/Big_Spider_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '6',
}
