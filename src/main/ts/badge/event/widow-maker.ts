import { BadgeData } from 'coh-content-db'
import { TheWidowInRed } from '../../mission/the-widow-in-red'

export const WidowMaker: BadgeData = {
  type: 'event',
  key: 'widow-maker',
  setTitleId: [2169],
  name: 'Widow Maker',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You were instrumental in the resurrection of Red Widow, Lord Recluse's love from long ago. Only time will tell if this calms Recluse down or drives him to new heights of villainy.` },
    { alignment: 'villain', value: `You were instrumental in the resurrection of Red Widow, Lord Recluse's love from long ago. Fortunatas have foreseen new heights of power achieved by Arachnos because of this act.` },
  ],
  links: [
    { title: 'Widow Maker Badge', href: 'https://homecoming.wiki/wiki/Widow_Maker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/widow-maker.png',
  requirements: [
    { key: TheWidowInRed.key, type: 'mission', missionKey: TheWidowInRed.key },
  ],
}
