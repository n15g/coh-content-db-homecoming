import { BadgeData } from 'coh-content-db'
import { BlackScorpion } from '../../contact/black-scorpion'

export const Fwoosh: BadgeData = {
  type: 'ACCOLADE',
  key: 'fwoosh',
  setTitle: { id: 617 },
  name: [
    { alignment: 'H', value: 'Fwoosh' },
    { alignment: 'V', value: 'The Stinger' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `This is the sound Black Scorpion's arm cannon will make when you run into him next. Didn't you learn not to peeve the guy in powered armor?` },
    { alignment: 'V', value: `Pretty soon, nobody's gonna be able to touch me. Stick with me and you'll go places,' Black Scorpion said approvingly.` },
  ],
  effect: `Awards the Mace Mastery patron power.`,
  links: [
    { title: 'Fwoosh Badge', href: 'https://homecoming.wiki/wiki/Fwoosh_Badge' },
    { title: 'The Stinger Badge', href: 'https://homecoming.wiki/wiki/The_Stinger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/fwoosh.png',
  requirements: [
    { key: 'armor-wars', type: 'ARC', missionName: 'Armor Wars', contactKey: BlackScorpion.key },
  ],
}
