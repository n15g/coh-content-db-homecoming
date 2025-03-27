import { BadgeData, mapLink } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const RisingStar: BadgeData = {
  type: 'ACCOLADE',
  key: 'rising-star',
  setTitle: { id: 2342 },
  name: [
    { value: 'Rising Star' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this accolade by completing every story arc within Imperial City.` },
  ],
  acquisition: `Complete every story arc in ${mapLink(ImperialCity)}`,
  notes: `This badge rewards 20 reward merits.`,
  links: [
    { title: 'Rising Star Badge', href: 'https://homecoming.wiki/wiki/Rising_Star_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
}
