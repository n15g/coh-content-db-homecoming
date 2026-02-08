import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const FiveTimesTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'five-times-the-victor',
  setTitleId: [417],
  name: 'Five Times the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have made progress impressing Mary Macomber, leader of the Cabal, by defeating her five times. Your promise is beginning to shine through, the Cabal's witches have taken notice.`,
  acquisition: `Defeat Mary MacComber five times during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Four Times the Victor Badge', href: 'https://homecoming.wiki/wiki/Five_Times_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/five-times-the-victor.png',
}
