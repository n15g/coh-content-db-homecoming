import { BadgeData } from 'coh-content-db'

export const RemembersTheirFriends: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'remembers-their-friends',
  setTitle: { id: 2268 },
  name: [
    { value: 'Remembers Their Friends' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'Vincent Ross was kidnapped by the Family after they found out he had past dealings with you. '
        + 'However, you beat the Family down and rescued Vincent Ross, showing the Rogue Isles that you '
        + 'remember your friends.',
    },
  ],
  acquisition: 'Rescue Vincent Ross in the fourth mission of the second story arc from Mr. G (Primal Earth)',
  links: [
    { title: 'Remembers Their Friends Badge', href: 'https://homecoming.wiki/wiki/Remembers_Their_Friends_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png' },
  ],
}
