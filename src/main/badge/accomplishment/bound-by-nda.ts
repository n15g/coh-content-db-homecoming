import { BadgeData } from 'coh-content-db'
import { AshlingCorlett } from '../../contact/ashling-corlett'

export const BoundByNDA: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'bound-by-nda',
  setTitle: { id: 2511 },
  name: [
    { alignment: 'H', value: 'Bound by NDA' },
    { alignment: 'V', value: `Crey's Dirty Secret` },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `You were successful in exposing ---- ---------- for having stolen ------- ---- from ---- ----- and using it to ---- ----- --- ------. You just can't legally talk about it.` },
    {
      alignment: 'V', value: `You were successful in exposing Crey Industries for having stolen genetic data from Hero Corps and using it to make their own heroes.
You can legally talk about it in the Isles, but either everyone knows, or nobody cares.`,
    },
  ],
  links: [
    { title: 'Bound by NDA Badge', href: 'https://homecoming.wiki/wiki/Bound_by_NDA_Badge' },
    { title: `Crey's Dirty Secret Badge`, href: 'https://homecoming.wiki/wiki/Crey%27s_Dirty_Secret_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/bound-by-nda.png',
  requirements: [
    { key: 'only-love-can-hurt-like-this', type: 'ARC', missionName: 'Only Love Can Hurt Like This', contactKey: AshlingCorlett.key },
  ],
}
