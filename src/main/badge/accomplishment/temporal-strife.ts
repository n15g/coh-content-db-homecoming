import { BadgeData } from 'coh-content-db'

export const TemporalStrife: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'temporal-strife',
  setTitle: { id: 993 },
  name: [
    { value: 'Temporal Strife' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You are one of the few who has travelled back in time to face the 5th Column as they attempted '
        + 'to build a temporal stronghold in the ancient lands of Cimerora.',
    },
  ],
  acquisition: 'Complete the Imperious Task Force: Time\'s Arrow',
  links: [
    { title: 'Temporal Strife Badge', href: 'https://homecoming.wiki/wiki/Temporal_Strife_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/temporal-strife.png' },
  ],
}
