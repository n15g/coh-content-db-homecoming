import { BadgeData } from 'coh-content-db'

export const Loyalist: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'loyalist',
  setTitle: { id: 1755 },
  name: [
    { value: 'Loyalist' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png' }],
  badgeText: [
    {
      value: 'You spent some effort bolstering the Praetorian regime of Emperor Cole, or at least appearing '
        + 'to do so.',
    },
  ],
  acquisition: 'Choose a Loyalist outcome in a moral choice mission',
  links: [
    { title: 'Loyalist Badge', href: 'https://homecoming.wiki/wiki/Loyalist_Badge' },
  ],
}
