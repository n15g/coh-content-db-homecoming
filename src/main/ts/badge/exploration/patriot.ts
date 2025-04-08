import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const Patriot: BadgeData = {
  type: 'exploration',
  key: 'patriot',
  setTitleId: [89],
  name: [
    { alignment: 'hero', value: 'Patriot' },
    { alignment: 'villain', value: 'International Spy' },
  ],
  morality: 'paragon-city-access',
  badgeText: `You have seen the statue of Cassiopeia, a Heroine recognized as a citizen of every country on Earth after she single-handedly saved the world from a rogue comet.`,
  notes: `Located just in front of the statue just left (west) of the supergroup registration desk inside City Hall.`,
  links: [
    { title: 'Patriot Badge', href: 'https://homecoming.wiki/wiki/Patriot_Badge' },
    { title: 'International Spy Badge', href: 'https://homecoming.wiki/wiki/International_Spy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [162, -768, -678] }, vidiotMapKey: '4' },
  ],
}
