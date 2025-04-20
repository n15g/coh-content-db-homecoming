import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { DrAeonStrikeForce } from '../../mission/dr-aeon-strike-force'

export const BestFriendsForever: BadgeData = {
  type: 'accomplishment',
  key: 'best-friends-forever',
  setTitleId: [2477],
  name: 'Best Friends Forever',
  releaseDate: '2020-11-26',
  morality: 'villainous',
  badgeText: `You like, totally took Becky hostage! Giving her a much needed break from that extra super boring desk job! In return she like, so totally came to your rescue to save the day and stuff!
Those weirdo gold guys are like, totally no match for Becky and her new BFF!`,
  acquisition: `Take Becky, the Tarantula Secretary hostage in the first mission of the ${missionLink(DrAeonStrikeForce)}, ensure she has a fun time, accept her help and complete the final mission without her being defeated.`,
  links: [
    { title: 'Best Friends Forever Badge', href: 'https://homecoming.wiki/wiki/Best_Friends_Forever_Badge' },
    { title: DrAeonStrikeForce.name, href: missionUri(DrAeonStrikeForce) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/best-friends-forever.png',
}
