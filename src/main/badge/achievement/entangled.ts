import { BadgeData } from 'coh-content-db'

export const Entangled: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'entangled',
  setTitle: { id: 19, praetorianId: 1694 },
  name: [
    { alignment: 'H', value: 'Entangled' },
    { alignment: 'V', value: 'Sleepy' },
    { alignment: 'P', value: 'Locked Out' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You continue to show aptitude at missing all the action.' },
    { alignment: 'V', value: 'You\'ve spent over 30 minutes Slept, Immobilized, or Held. Lord Recluse is not impressed.' },
    { alignment: 'P', value: 'Eventually, you will remember that you can purchase Break Free Inspirations. Eventually.' },
  ],
  acquisition: 'Be held for 30 minutes',
  links: [
    { title: 'Entangled Badge', href: 'https://homecoming.wiki/wiki/Entangled_Badge' },
    { title: 'Sleepy Badge', href: 'https://homecoming.wiki/wiki/Sleepy_Badge' },
    { title: 'Locked Out Badge', href: 'https://homecoming.wiki/wiki/Locked_Out_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
