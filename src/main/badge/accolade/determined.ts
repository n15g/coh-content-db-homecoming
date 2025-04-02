import { BadgeData, contactLink } from 'coh-content-db'
import { Max } from '../../contact/max'
import { HeatherTownshend } from '../../contact/heather-townshend'
import { MuVorkan } from '../../contact/muvorkan'
import { PraetorDuncan } from '../../contact/praetor-duncan'
import { DreamDoctor } from '../../contact/dream-doctor'

export const Determined: BadgeData = {
  type: 'ACCOLADE',
  key: 'determined',
  setTitle: { id: 2343 },
  name: [
    { value: 'Determined' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this accolade by completing every story arc within Dark Astoria.` },
  ],
  effect: 'Awards 20 reward merits.',
  notes: `
  You must not skip missions in dialogue with ${contactLink(Max)} (if you have done so, you can repeat them via Ouroboros), and you must have done whichever of 'Captain Nolan' or 'Threatening Arachnos Message' is appropriate for your alignment.`,
  links: [
    { title: 'Determined Badge', href: 'https://homecoming.wiki/wiki/Determined_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png' },
  ],
  requirements: [
    { key: 'burden-of-the-past', type: 'ARC', missionName: 'Burden of the Past', contactKey: HeatherTownshend.key },
    { key: 'an-act-of-mercy', type: 'ARC', missionName: 'An Act of Mercy', contactKey: MuVorkan.key },
    { key: 'the-end-of-vengeance', type: 'MISSION', missionName: 'The end of Vengeance', contactKey: Max.key },
    { key: 'to-what-end-for-power', type: 'ARC', missionName: 'To What End for Power', contactKey: PraetorDuncan.key },
    { key: 'the-choice-of-hope-ch2', type: 'ARC', missionName: 'The Choice of Hope (Second Half)', contactKey: DreamDoctor.key },
  ],
}
