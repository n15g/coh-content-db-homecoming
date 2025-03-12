import { BadgeData } from 'coh-content-db'

export const TruthTeller: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'truth-teller',
  setTitle: { id: 2199 },
  name: [
    { value: 'Truth Teller' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You played through Dream Doctor\'s personal story, witnessing the event where Dream Doctor '
        + 'confronted Mender Silos and revealed why he harbors such a large hatred for Ouroboros.',
    },
  ],
  acquisition: 'Complete the personal story mission from Dream Doctor',
  links: [
    { title: 'Truth Teller Badge', href: 'https://homecoming.wiki/wiki/Truth_Teller_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png' },
  ],
}
