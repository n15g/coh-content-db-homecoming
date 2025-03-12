import { BadgeData } from 'coh-content-db'

export const PraetorSelfish: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'praetor-selfish',
  setTitle: { id: 2197 },
  name: [
    { value: 'Praetor Selfish' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You played through Praetor Duncan\'s personal story, witnessing the event where Duncan was '
        + 'confronted by her past and kidnapped by Diabolique and Mot.',
    },
  ],
  acquisition: 'Complete the personal story mission from Praetor Duncan',
  links: [
    { title: 'Praetor Selfish Badge', href: 'https://homecoming.wiki/wiki/Praetor_Selfish_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png' },
  ],
}
