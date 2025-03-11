import { BadgeData } from 'coh-content-db'

export const Adventurer: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'adventurer',
  setTitle: { id: 1581, praetorianId: 1666 },
  name: [
    { value: 'Adventurer' },
    { alignment: 'P', value: 'Doer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H',
      value: 'You\'ve explored your world and tackled dangerous obstacles that would fell lesser heroes.'
        + ' However, you get the distinct impression there is still much left to do.',
    },
    { alignment: 'V', value: 'You\'ve conquered, plotted against and crushed your enemies. However, none of this gives you total fulfillment, there\'s still so much left to be done.' },
    { alignment: 'P', value: 'Your motto seems to be, "If it was not meant to be done, it would not be there." So far all the universes you\'ve been to tend to agree.' },
  ],
  acquisition: 'Earn 750 badges',
  links: [
    { title: 'Adventurer Badge', href: 'https://homecoming.wiki/wiki/Adventurer_Badge' },
    { title: 'Doer Badge', href: 'https://homecoming.wiki/wiki/Doer_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/adventurer-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/adventurer-v.png' },
  ],
}
