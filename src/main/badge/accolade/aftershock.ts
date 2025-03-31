import { BadgeData } from 'coh-content-db'
import { JimTemblor } from '../../contact/jim-temblor'
import { PenelopeYinFaultline } from '../../contact/penelope-yin-faultline'
import { DocDelilah } from '../../contact/doc-delilah'
import { AgentG } from '../../contact/agent-g'

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
  effect: 'Awards 20 reward merits.',
  links: [
    { title: 'Aftershock Badge', href: 'https://homecoming.wiki/wiki/Aftershock_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
  ],
  requirements: [
    [
      { key: 'rumblings-of-the-past', type: 'ARC', missionName: 'Rumblings of the Past', contactKey: JimTemblor.key },
      { key: 'i-lost-my-daddy', type: 'ARC', missionName: 'I Lost My Daddy!', contactKey: PenelopeYinFaultline.key },
      { key: 'the-buried-past', type: 'ARC', missionName: 'The Buried Past', contactKey: DocDelilah.key },
      { key: 'a-faultline-in-the-sands-of-time', type: 'ARC', missionName: 'A Faultline in the Sands of Time', contactKey: AgentG.key },
    ],
  ],
}
