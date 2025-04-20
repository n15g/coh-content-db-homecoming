import { BadgeData, missionLink } from 'coh-content-db'
import { TroubledTimes } from '../../mission/troubled-times'

export const LoopHero: BadgeData = {
  type: 'accomplishment',
  key: 'loop-hero',
  setTitleId: [2514],
  name: 'Loop Hero',
  releaseDate: '2020-11-26',
  morality: 'heroic',
  badgeText: `After much trial and tribulation, you were able to use Ouroboros to put an end to the Stribbling family drama. By your own count, you must have gone around at least 5 times... but the real number could be well into the thousands.`,
  acquisition: `Complete the ${missionLink(TroubledTimes)} arc four times, choosing all four outcomes and then completing the arc a final time.`,
  notes: `Run the arc four times, choosing each of the four fates for Marcus until all four choices have been made:

* Let him go
* Arrest him
* Return him
* Finish him off

Once each of the above outcomes have been achieved, run the arc a 5th time.
Mender Roebuck will appear during the arc, speak to him and choose "I'll do what I believe is best, you have no say in it.". Speak to Marcus, agree to trick his father, and you will have a new mission to take down Dr. Stribbling.

This is an abridged version of the steps to complete this badge. A more detailed walkthough can be found on the [HC forums](https://forums.homecomingservers.com/topic/42619-loop-hero-badge-guide/).`,
  links: [
    { title: 'Loop Hero Badge', href: 'https://homecoming.wiki/wiki/Loop_Hero_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/loop-hero.png',
  requirements: [
    { key: 'release', type: 'mission', missionKey: TroubledTimes.key, notes: 'Chose to let him go.' },
    { key: 'arrest', type: 'mission', missionKey: TroubledTimes.key, notes: 'Chose to arrest him.' },
    { key: 'return', type: 'mission', missionKey: TroubledTimes.key, notes: 'Chose to return him.' },
    { key: 'kill', type: 'mission', missionKey: TroubledTimes.key, notes: 'Chose to finish him off.' },
    { key: 'finale', type: 'mission', missionKey: TroubledTimes.key, notes: 'Final run.' },
  ],
}
