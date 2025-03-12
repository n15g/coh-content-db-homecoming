import { BadgeData } from 'coh-content-db'

export const BoundForGlory: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'bound-for-glory',
  setTitle: { id: 2195 },
  name: [
    { value: 'Bound for Glory' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You played through Mu\'Vorkan\'s personal story, witnessing the event where his quest to become '
        + 'a patron of Arachnos began.',
    },
  ],
  acquisition: 'Complete the personal story mission from Mu\'Vorkan',
  links: [
    { title: 'Bound for Glory Badge', href: 'https://homecoming.wiki/wiki/Bound_for_Glory_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png' },
  ],
}
