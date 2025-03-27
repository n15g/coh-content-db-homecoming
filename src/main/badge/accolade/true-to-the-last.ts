import { BadgeData, mapLink } from 'coh-content-db'
import { Neutropolis } from '../../map/neutropolis'

export const TrueToTheLast: BadgeData = {
  type: 'ACCOLADE',
  key: 'true-to-the-last',
  setTitle: { id: 2351 },
  name: [
    { value: 'True to the Last' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Wherever you must go, whatever you must do, Praetoria will always & forever be your home, and to it you shall be True to the Last.` },
  ],
  acquisition: `Complete every story arc in ${mapLink(Neutropolis)}`,
  notes: `This badge rewards 20 reward merits.`,
  links: [
    { title: 'True to the Last Badge', href: 'https://homecoming.wiki/wiki/True_to_the_Last_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
}
