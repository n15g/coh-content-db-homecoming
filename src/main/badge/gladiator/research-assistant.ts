import { BadgeData } from 'coh-content-db'
import { CreyHavoc } from '../exploration/crey-havoc'

export const ResearchAssistant: BadgeData = {
  type: 'gladiator',
  key: 'research-assistant',
  setTitleId: [500],
  name: 'Research Assistant',
  morality: 'heroic',
  badgeText: 'Crey will study the results of your gladiator battles.',
  links: [
    { title: 'Research Assistant Badge', href: 'https://homecoming.wiki/wiki/Research_Assistant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: CreyHavoc.key, type: 'badge', badgeKey: CreyHavoc.key },
  ],
}
