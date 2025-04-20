import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KatieHannonTaskForce } from '../../mission/katie-hannon-task-force'

export const TenTimesTheVictor: BadgeData = {
  type: 'accomplishment',
  key: 'ten-times-the-victor',
  setTitleId: [422],
  name: 'Ten Times the Victor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have impressed Mary Macomber, leader of the Cabal, by defeating her ten times. Though some members of the Cabal may still fear you, others will work as your allies.
As a reward, you can now use a witch hat as a costume piece.`,
  acquisition: `Defeat Mary MacComber ten times during the ${missionLink(KatieHannonTaskForce)}.`,
  links: [
    { title: 'Ten Times the Victor Badge', href: 'https://homecoming.wiki/wiki/Ten_Times_the_Victor_Badge' },
    { title: KatieHannonTaskForce.name, href: missionUri(KatieHannonTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ten-times-the-victor.png',
}
