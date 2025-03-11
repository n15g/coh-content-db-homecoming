import { BadgeData } from 'coh-content-db'

export const Diplomat: BadgeData = {
  type: 'DEFEAT',
  key: 'diplomat',
  setTitle: { id: 735 },
  name: [
    { alignment: 'H', value: 'Diplomat' },
    { alignment: 'V', value: 'Breathes Easy' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have won a victory on foreign soil, defeating all of Lord Recluse\'s minions.' },
    {
      alignment: 'V', value: 'Defeating all of Lord Recluse\'s minions before making a home in the Rogue Isles has earned you '
        + 'some breathing room.',
    },
  ],
  acquisition: 'Defeat the villains Ghost Widow, Scirocco, Captain Mako and Black Scorpion in the Statesman Task Force',
  links: [
    { title: 'Diplomat Badge', href: 'https://homecoming.wiki/wiki/Diplomat_Badge' },
    { title: 'Breathes Easy Badge', href: 'https://homecoming.wiki/wiki/Breathes_Easy_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/defeatrecluse.png' },
  ],
}
