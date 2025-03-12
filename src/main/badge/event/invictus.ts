import { BadgeData } from 'coh-content-db'

export const Invictus: BadgeData = {
  type: 'EVENT',
  key: 'invictus',
  setTitle: { id: 2246 },
  name: [
    { value: 'Invictus' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You forced the God-Champion to go invulnerable while all of his Champions were still alive.' },
  ],
  acquisition: 'In the Summer Blockbuster, force the God-Champion to go invulnerable while all of his Champions are still alive.',
  notes: '# Crowd Favor\n'
    + 'The team must have 500 favor at the end of the fight with Gotterdamerung for the God-Champion to appear. There are three ways to accrue Favor:\n'
    + '\n'
    + '* The defeat of the major challengers will give a large boost\n'
    + '* Each Rikti Monkey or Ninja defeated will give a small boost\n'
    + '* Randomly throughout the fights, the team may acquire an Incite The Crowd temporary power which provides a large boost\n'
    + 'In addition, favor decreases at a steady pace, so quicker kills will provide greater net favor gain. Once Favor reaches 500, it is fixed and will neither increase nor decrease.\n'
    + '\n'
    + '# The Fight\n'
    + 'As the God-Champion is injured he will spawn Elite Boss versions of the Challengers from the previous fights. Once he reaches 30% health, he will go invulnerable and'
    + ' untargetable until the EB\'s are defeated.',
  links: [
    { title: 'Invictus Badge', href: 'https://homecoming.wiki/wiki/Invictus_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/invictus.png' }],
}
