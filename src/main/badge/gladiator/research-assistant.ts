import { BadgeData, badgeLink } from 'coh-content-db'
import { CreyHavoc } from '../exploration/crey-havoc'

export const ResearchAssistant: BadgeData = {
  type: 'GLADIATOR',
  key: 'research-assistant',
  setTitle: { id: 500 },
  name: [
    { value: 'Research Assistant' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'Crey will study the results of your gladiator battles.' },
  ],
  acquisition: `Earn the ${badgeLink(CreyHavoc)} Badge (Crey)`,
  links: [
    { title: 'Research Assistant Badge', href: 'https://homecoming.wiki/wiki/Research_Assistant_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
