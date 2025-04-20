import { BadgeData } from 'coh-content-db'
import { UnavoidableFateDreamDoctor } from '../../mission/unavoidable-fate-dream-doctor'

export const TruthTeller: BadgeData = {
  type: 'accomplishment',
  key: 'truth-teller',
  setTitleId: [2199],
  name: 'Truth Teller',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You played through Dream Doctor's personal story, witnessing the event where Dream Doctor confronted Mender Silos and revealed why he harbors such a large hatred for Ouroboros.`,
  links: [
    { title: 'Truth Teller Badge', href: 'https://homecoming.wiki/wiki/Truth_Teller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: UnavoidableFateDreamDoctor.key, type: 'mission', missionKey: UnavoidableFateDreamDoctor.key },
  ],
}
