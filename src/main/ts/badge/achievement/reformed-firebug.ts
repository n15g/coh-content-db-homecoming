import { BadgeData } from 'coh-content-db'

export const ReformedFirebug: BadgeData = {
  type: 'achievement',
  key: 'reformed-firebug',
  setTitleId: [547],
  name: [
    { alignment: 'hero', value: 'Reformed Firebug' },
    { alignment: 'villain', value: 'Firebug' },
  ],
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `For your actions setting Paragon City ablaze, you've been prohibited from owning matches or lighters of any sort.` },
    { alignment: 'villain', value: 'You have set Paragon City ablaze!' },
  ],
  acquisition: 'Complete 10 Arson side missions in Mayhem Missions.',
  links: [
    { title: 'Reformed Firebug Badge', href: 'https://homecoming.wiki/wiki/Reformed_Firebug_Badge' },
    { title: 'Firebug Badge', href: 'https://homecoming.wiki/wiki/Firebug_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reformed-firebug.png',
}
