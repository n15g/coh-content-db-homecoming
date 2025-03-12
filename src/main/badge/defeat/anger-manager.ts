import { BadgeData } from 'coh-content-db'

export const AngerManager: BadgeData = {
  type: 'DEFEAT',
  key: 'anger-manager',
  setTitle: { id: 554 },
  name: [
    { alignment: 'H', value: 'Anger Manager' },
    { alignment: 'V', value: 'Vandal' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: 'With time, your legendary rage towards inanimate objects will be a thing of the past.' },
    { alignment: 'V', value: 'You\'ve taken your rage out on everything not nailed down in Paragon City.' },
  ],
  acquisition: 'Destroying 25 Hydrants, 25 Mailboxes, 25 Newspaper stands, and 25 Pay Phones in Mayhem Missions',
  links: [
    { title: 'Anger Manager Badge', href: 'https://homecoming.wiki/wiki/Anger_Manager_Badge' },
    { title: 'Vandal Badge', href: 'https://homecoming.wiki/wiki/Vandal_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/anger-manager.png' },
  ],
}
