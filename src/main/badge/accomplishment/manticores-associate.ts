import { BadgeData } from 'coh-content-db'

export const ManticoresAssociate: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'manticores-associate',
  setTitle: { id: 65 },
  name: [
    { alignment: 'H', value: 'Manticore\'s Associate' },
    { alignment: 'V', value: 'Manticore\'s Betrayer' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: 'Manticore was proud to present you with this medal, in recognition of the valor and honor you '
        + 'showed while helping him.',
    },
    { alignment: 'V', value: 'Manticore, always the paranoid one, now thinks you let Countess Crey escape on purpose...' },
  ],
  acquisition: 'Complete the Manticore Task Force: Following Countess Crey',
  links: [
    { title: 'Manticore\'s Associate Badge', href: 'https://homecoming.wiki/wiki/Manticore%27s_Associate_Badge' },
    { title: 'Manticore\'s Betrayer Badge', href: 'https://homecoming.wiki/wiki/Manticore%27s_Betrayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/manticores-associate.png' },
  ],
}
