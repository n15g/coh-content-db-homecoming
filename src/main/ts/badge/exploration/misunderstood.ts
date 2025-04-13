import { BadgeData } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const Misunderstood: BadgeData = {
  type: 'exploration',
  key: 'misunderstood',
  setTitleId: [1563],
  name: 'Misunderstood',
  morality: 'paragon-city-access',
  badgeText: `Voodoo practitioner Cadao Kestrel fled into these tunnels after being accused of murder.
Agent Six tracked him here and beat him within an inch of his life before arresting him.
Cadao would later be cleared of all charges, but to this day he has not gone near Agent Six, claiming she is, "out of her mind."`,
  notes: `Located directly in front of Agent Six, the Natural store.`,
  links: [
    { title: 'Misunderstood Badge', href: 'https://homecoming.wiki/wiki/Misunderstood_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FoundersFalls.key, coords: [1126, -16, 2149], icon: 'badge', iconText: '8' } },
  ],
}
