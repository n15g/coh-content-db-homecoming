import { BadgeData } from 'coh-content-db'

export const RoleModel: BadgeData = {
  type: 'achievement',
  key: 'role-model',
  setTitleId: [245, 1708],
  name: [
    { value: 'Role Model' },
    { alignment: 'praetorian', value: 'Dean of Hard Knocks' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You are looked at as a Role Model to the newest generation of Heroes.' },
    { alignment: 'villain', value: `You've spent considerable time with a lackey of your own.` },
    { alignment: 'praetorian', value: `There's a lot of harsh lessons common to all worlds. If you can spare some new kid just one, that's enough for you.` },
  ],
  acquisition: 'Sidekick another hero for 16 hours.',
  links: [
    { title: 'Role Model Badge', href: 'https://homecoming.wiki/wiki/Role_Model_Badge' },
    { title: 'Dean of Hard Knocks Badge', href: 'https://homecoming.wiki/wiki/Dean_of_Hard_Knocks_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
