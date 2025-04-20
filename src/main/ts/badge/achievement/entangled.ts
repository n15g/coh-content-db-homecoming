import { BadgeData } from 'coh-content-db'

export const Entangled: BadgeData = {
  type: 'achievement',
  key: 'entangled',
  setTitleId: [19, 1694],
  name: [
    { alignment: 'hero', value: 'Entangled' },
    { alignment: 'villain', value: 'Sleepy' },
    { alignment: 'praetorian', value: 'Locked Out' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You continue to show aptitude at missing all the action.' },
    { alignment: 'villain', value: `You've spent over 30 minutes Slept, Immobilized, or Held. Lord Recluse is not impressed.` },
    { alignment: 'praetorian', value: 'Eventually, you will remember that you can purchase Break Free Inspirations. Eventually.' },
  ],
  acquisition: 'Be held for 30 minutes.',
  links: [
    { title: 'Entangled Badge', href: 'https://homecoming.wiki/wiki/Entangled_Badge' },
    { title: 'Sleepy Badge', href: 'https://homecoming.wiki/wiki/Sleepy_Badge' },
    { title: 'Locked Out Badge', href: 'https://homecoming.wiki/wiki/Locked_Out_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
