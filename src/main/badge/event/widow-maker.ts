import { BadgeData } from 'coh-content-db'

export const WidowMaker: BadgeData = {
  type: 'EVENT',
  key: 'widow-maker',
  setTitle: { id: 2169 },
  name: [
    { value: 'Widow Maker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You were instrumental in the resurrection of Red Widow, Lord Recluse's love from long ago. Only time will tell if this calms Recluse down or drives him to new heights of villainy.` },
    { alignment: 'V', value: `You were instrumental in the resurrection of Red Widow, Lord Recluse's love from long ago. Fortunatas have foreseen new heights of power achieved by Arachnos because of this act.` },
  ],
  acquisition: 'Complete the story arc from Jessica Megan Duncan or Arbiter Hawk during the Spring Event.',
  links: [
    { title: 'Widow Maker Badge', href: 'https://homecoming.wiki/wiki/Widow_Maker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/widow-maker.png' }],
}
