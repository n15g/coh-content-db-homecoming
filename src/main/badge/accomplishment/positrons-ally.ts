import { BadgeData } from 'coh-content-db'

export const PositronsAlly: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'positrons-ally',
  setTitle: { id: 61 },
  name: [
    { alignment: 'H', value: 'Positron\'s Ally' },
    { alignment: 'V', value: 'Positron\'s Betrayer' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'Positron has awarded you this medal in recognition of services performed for him.' },
    { alignment: 'V', value: 'Positron himself once awarded this medal to you. Nowadays he\'d probably arrest you.' },
  ],
  acquisition: 'Complete both parts of the Positron Task Force: The Rule of Three',
  links: [
    { title: 'Positron\'s Ally Badge', href: 'https://homecoming.wiki/wiki/Positron%27s_Ally_Badge' },
    { title: 'Positron\'s Betrayer Badge', href: 'https://homecoming.wiki/wiki/Positron%27s_Betrayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/positrons-ally.png' },
  ],
}
