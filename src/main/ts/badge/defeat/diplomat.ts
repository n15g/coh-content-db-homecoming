import { BadgeData } from 'coh-content-db'

export const Diplomat: BadgeData = {
  type: 'defeat',
  key: 'diplomat',
  setTitleId: [735],
  name: [
    { alignment: 'hero', value: 'Diplomat' },
    { alignment: 'villain', value: 'Breathes Easy' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have won a victory on foreign soil, defeating all of Lord Recluse's minions.` },
    { alignment: 'villain', value: `Defeating all of Lord Recluse's minions before making a home in the Rogue Isles has earned you some breathing room.` },
  ],
  acquisition: 'Defeat the villains Ghost Widow, Scirocco, Captain Mako and Black Scorpion in the Statesman Task Force.',
  links: [
    { title: 'Diplomat Badge', href: 'https://homecoming.wiki/wiki/Diplomat_Badge' },
    { title: 'Breathes Easy Badge', href: 'https://homecoming.wiki/wiki/Breathes_Easy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/defeatrecluse.png',
}
