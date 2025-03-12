import { BadgeData } from 'coh-content-db'

export const ReformedFirebug: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'reformed-firebug',
  setTitle: { id: 547 },
  name: [
    { alignment: 'H', value: 'Reformed Firebug' },
    { alignment: 'V', value: 'Firebug' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H', value: 'For your actions setting Paragon City ablaze, you\'ve been prohibited from owning matches or '
        + 'lighters of any sort.',
    },
    { alignment: 'V', value: 'You have set Paragon City ablaze!' },
  ],
  acquisition: 'Complete 10 Arson side missions in Mayhem Missions',
  links: [
    { title: 'Reformed Firebug Badge', href: 'https://homecoming.wiki/wiki/Reformed_Firebug_Badge' },
    { title: 'Firebug Badge', href: 'https://homecoming.wiki/wiki/Firebug_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reformed-firebug.png' },
  ],
}
