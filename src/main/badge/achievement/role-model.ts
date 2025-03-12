import { BadgeData } from 'coh-content-db'

export const RoleModel: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'role-model',
  setTitle: { id: 245, praetorianId: 1708 },
  name: [
    { value: 'Role Model' },
    { alignment: 'P', value: 'Dean of Hard Knocks' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You are looked at as a Role Model to the newest generation of Heroes.' },
    { alignment: 'V', value: 'You\'ve spent considerable time with a lackey of your own.' },
    {
      alignment: 'P', value: 'There\'s a lot of harsh lessons common to all worlds. If you can spare some new kid just one, '
        + 'that\'s enough for you.',
    },
  ],
  acquisition: 'Sidekick another hero for 16 hours',
  links: [
    { title: 'Role Model Badge', href: 'https://homecoming.wiki/wiki/Role_Model_Badge' },
    { title: 'Dean of Hard Knocks Badge', href: 'https://homecoming.wiki/wiki/Dean_of_Hard_Knocks_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
