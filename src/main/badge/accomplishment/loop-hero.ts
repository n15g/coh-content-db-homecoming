import { BadgeData, zoneLink } from 'coh-content-db'
import { DrStribbling } from '../../contact/dr-stribbling'
import { Ouroboros } from '../../zone/ouroboros'

export const LoopHero: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'loop-hero',
  setTitle: { id: 2514 },
  name: 'Loop Hero',
  alignment: ['H'],
  badgeText: `After much trial and tribulation, you were able to use Ouroboros to put an end to the Stribbling family drama. By your own count, you must have gone around at least 5 times... but the real number could be well into the thousands.`,
  acquisition: `Complete the Troubled Times arc from Dr. Stribbling four times, choosing all four outcomes and then again a final time.`,
  notes: `Run the Troubled Times arc from Dr. Stribbling (Level 30-34, Arc 27.08 in ${zoneLink(Ouroboros)}, Vigilante) four times, choosing one of the four fates for Marcus below until all four choices have been made:

* Let him go
* Arrest him
* Return him
* Finish him off

Once each of the above outcomes have been achieved, run the arc a 5th time.

Mender Roebuck will appear during the arc, speak to him and during the dialogue, choose to say "I'll do what I believe is best, you have no say in it.", Then speak to Marcus, agree to trick his father, and you will have a new mission to take down Dr. Stribbling.

This is an abridged version of the steps to complete this badge. A more detailed walkthough can be found on the [HC forums](https://forums.homecomingservers.com/topic/42619-loop-hero-badge-guide/).`,
  links: [
    { title: 'Loop Hero Badge', href: 'https://homecoming.wiki/wiki/Loop_Hero_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/loop-hero.png',
  requirements: [
    { key: 'troubled-times-a', type: 'ARC', missionName: 'Troubled Times', notes: 'Chose to let him go.', contactKey: DrStribbling.key },
    { key: 'troubled-times-b', type: 'ARC', missionName: 'Troubled Times', notes: 'Chose to arrest him.', contactKey: DrStribbling.key },
    { key: 'troubled-times-c', type: 'ARC', missionName: 'Troubled Times', notes: 'Chose to return him.', contactKey: DrStribbling.key },
    { key: 'troubled-times-d', type: 'ARC', missionName: 'Troubled Times', notes: 'Chose to finish him off.', contactKey: DrStribbling.key },
    { key: 'troubled-times-final', type: 'ARC', missionName: 'Troubled Times', notes: 'Final run.', contactKey: DrStribbling.key },

  ],
}
