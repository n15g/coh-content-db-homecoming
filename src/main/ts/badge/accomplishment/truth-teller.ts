import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { DreamDoctor } from '../../contact/dream-doctor'

export const TruthTeller: BadgeData = {
  type: 'accomplishment',
  key: 'truth-teller',
  setTitleId: [2199],
  name: 'Truth Teller',
  morality: 'all',
  badgeText: `You played through Dream Doctor's personal story, witnessing the event where Dream Doctor confronted Mender Silos and revealed why he harbors such a large hatred for Ouroboros.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "Dream Doctor's Personal Story" entry with number 22.21 at level 50.`,
  links: [
    { title: 'Truth Teller Badge', href: 'https://homecoming.wiki/wiki/Truth_Teller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: 'uf', type: 'MISSION', missionName: 'Unavoidable Fate', contactKey: DreamDoctor.key },
  ],
}
