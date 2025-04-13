import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { TheLadyGreyTaskForce } from '../../mission/the-lady-grey-task-force'

export const DoesntLookAtExplosions: BadgeData = {
  type: 'accomplishment',
  key: 'doesnt-look-at-explosions',
  setTitleId: [2516],
  name: `Doesn't Look At Explosions`,
  morality: 'all',
  badgeText: `Part of the job is knowing how to look cool, and you've mastered the art. While not intentional, when fate threw you aboard a Rikti space station, you sent it nuclear and made it out in one piece.`,
  acquisition: `Successfully complete the ending sequence of ${missionLink(TheLadyGreyTaskForce)} Advanced Mode.`,
  links: [
    { title: `Doesn't Look At Explosions Badge`, href: 'https://homecoming.wiki/wiki/Doesn%27t_Look_At_Explosions_Badge' },
    { title: TheLadyGreyTaskForce.key, href: missionUri(TheLadyGreyTaskForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/doesnt-look-at-explosions.png',
}
