import { BadgeData } from 'coh-content-db'

export const PartyAnimal: BadgeData = {
  type: 'EXPLORATION',
  key: 'party-animal',
  setTitle: { id: 2522 },
  name: [{ value: 'Party Animal' }],
  alignment: ['H'],
  badgeText: [{
    value: `You've always sought out the biggest parties, where you're certain to make a splash, and now you've become truly unparalleled. Having been to dance clubs from entirely different dimensions you are, without any doubt, a Party Animal.`,
  }],
  notes: `Visit Pocket D, Studio 55, and Paragon Dance Party`,
  links: [
    { title: 'Party Animal Badge', href: 'https://homecoming.wiki/wiki/Party_Animal_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
}
