import { BadgeData } from 'coh-content-db'

export const NaniteMan: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'nanite-man',
  setTitle: { id: 2196 },
  name: [
    { sex: 'M', value: 'Nanite Man' },
    { sex: 'F', value: 'Nanite Woman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You played through Max\'s personal story, witnessing the event where Malta recruited Battle '
        + 'Maiden to upgrade their technology with her nanites.',
    },
  ],
  acquisition: 'Complete the personal story mission from Max',
  links: [
    { title: 'Nanite Man Badge', href: 'https://homecoming.wiki/wiki/Nanite_Man_Badge' },
    { title: 'Nanite Woman Badge', href: 'https://homecoming.wiki/wiki/Nanite_Woman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png' },
  ],
}
