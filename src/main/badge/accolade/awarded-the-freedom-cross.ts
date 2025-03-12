import { BadgeData } from 'coh-content-db'

export const AwardedTheFreedomCross: BadgeData = {
  type: 'ACCOLADE',
  key: 'awarded-the-freedom-cross',
  setTitle: { id: 180 },
  name: [
    { alignment: 'H', value: 'Awarded the Freedom Cross' },
    { alignment: 'V', value: 'Stripped of the Freedom Cross' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `Powerful energies of the Terra Volta reactor have permanently fused with your own, modifying them in dramatic ways.` },
  ],
  acquisition: `Complete the third Terra Volta Respecification Trial`,
  notes: `The third (level 44-50) Terra Volta Respecification Trial is available from Major Richard Flagg in Peregrine Island.`,
  links: [
    { title: 'Awarded the Freedom Cross Badge', href: 'https://homecoming.wiki/wiki/Awarded_the_Freedom_Cross_Badge' },
    { title: 'Stripped of the Freedom Cross Badge', href: 'https://homecoming.wiki/wiki/Stripped_of_the_Freedom_Cross_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/awarded-the-freedom-cross.png' },
  ],
}
