import { BadgeData } from 'coh-content-db'
import { TheLabyrinthOfFog } from '../../zone/the-labyrinth-of-fog'

export const GreekPhilosopher: BadgeData = {
  type: 'history',
  key: 'greek-philosopher',
  setTitleId: [2531],
  name: 'Greek Philosopher',
  morality: 'all',
  badgeText: `The origin behind the Labyrinth of Fog has been obscured for ages, but you've recently discovered evidence that suggests the labyrinth was created to imprison an ancient calamity that once befell the islands of Greece.`,
  links: [
    { title: 'Greek Philosopher Badge', href: 'https://homecoming.wiki/wiki/Greek_Philosopher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/greek-philosopher.png',
  requirements: [
    {
      key: 'gree-0',
      type: 'monument',
      location: { zoneKey: TheLabyrinthOfFog.key, coords: [469.7, -205, 2713.8], icon: 'pedestal' },
      monumentText: `It was over tavern ale, shared whilst waiting out the storm. This sailor spoke of ominous tidings, of nightmares given form.
An evil catastrophe, feeding upon man's fear, it grew dense.
They spoke of the fog that plagued the southwest isles hence.`,
      notes: `Located inside the structure near the purple portal.`,
    },
    {
      key: 'gree-1',
      type: 'monument',
      location: { zoneKey: TheLabyrinthOfFog.key, coords: [227.5, -84, 2669.2], icon: 'pedestal' },
      monumentText: `This divine prison would inherit the strength of those within.
An inescapable maze constructed by human imagination. Entrusted to the rulers of the land, the calamity was hidden.
The labyrinth shackling the catastrophic fog was forbidden.`,
      notes: `Located in front of the Gate of Darkness pillar.`,
    },
    {
      key: 'gree-2',
      type: 'monument',
      location: { zoneKey: TheLabyrinthOfFog.key, coords: [584.7, -113.3, 2800.5], icon: 'pedestal' },
      monumentText: `Hope itself became obscured, the land lost in a sea of grey. Few remained to make a stand, for deliverance they could only pray.
Then a brilliant plan was proposed, the fog itself could be contained.
An infinite vessel it would demand, an eternal prison forever maintained.`,
      notes: `Located by the large dead tree.`,
    },
    {
      key: 'gree-3',
      type: 'monument',
      location: { zoneKey: TheLabyrinthOfFog.key, coords: [289.9, -101.3, 2402], icon: 'pedestal' },
      monumentText: `The malevolent fog, all-powerful, but forever to be contained.
The calamity's will was imposed, with combat would they be entertained.
Those who offered their souls, given immortality to forever fight, the strongest Gladiator would earn the fog's favor and might.`,
      notes: `Located behind the small structure on top of the sideways temple.`,
    },
    {
      key: 'gree-4',
      type: 'monument',
      location: { zoneKey: TheLabyrinthOfFog.key, coords: [543.1, 7, 2856], icon: 'pedestal' },
      monumentText: `The king of fools, for divine wisdom he would not heed.
A traitorous, blasphemous act, let none forget his deed.
Due to the consequences of thoughtless, brazen sin.
The labyrinth gave birth to its immortal guardian.`,
      notes: `Located by the fog brazier.`,
    },
    {
      key: 'gree-5',
      type: 'monument',
      location: { zoneKey: TheLabyrinthOfFog.key, coords: [395, -245.3, 2748.7], icon: 'pedestal' },
      monumentText: `A horde most unholy, fear given shape, guided by an unseen hand.
The time for heroes had come, and many sought to defend the land.
Against the endless fog they strove, but it was too dense, too deep.
Every monster was cut down, yet no victory could they reap.`,
      notes: `Located inside the mausoleum.`,
    },
  ],
}
