import { BadgeData, zoneLink } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const Aftershock: BadgeData = {
  type: 'ACCOLADE',
  key: 'aftershock',
  setTitle: { id: 2373 },
  name: [
    { value: 'Aftershock' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this accolade by completing every story arc within Faultline.` },
  ],
  acquisition: `Complete every story arc in ${zoneLink(Faultline)}`,
  notes: `
This badge rewards 20 reward merits for completing the following story arcs (contact in parentheses):

* Rumblings of the Past (Jim Temblor)
* I Lost My Daddy! (Penelope Yin)
* The Buried Past (Doc Delilah)
* A Faultline in the Sands of Time (Agent G)
`,
  links: [
    { title: 'Aftershock Badge', href: 'https://homecoming.wiki/wiki/Aftershock_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
  ],
}
