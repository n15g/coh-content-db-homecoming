import { BadgeData } from 'coh-content-db'
import { OnlyLoveCanHurtLikeThis } from '../../mission/only-love-can-hurt-like-this'

export const BoundByNDA: BadgeData = {
  type: 'accomplishment',
  key: 'bound-by-nda',
  setTitleId: [2511],
  name: [
    { alignment: 'hero', value: 'Bound by NDA' },
    { alignment: 'villain', value: `Crey's Dirty Secret` },
  ],
  releaseDate: '2024-11-19',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You were successful in exposing ---- ---------- for having stolen ------- ---- from ---- ----- and using it to ---- ----- --- ------. You just can't legally talk about it.` },
    {
      alignment: 'villain', value: `You were successful in exposing Crey Industries for having stolen genetic data from Hero Corps and using it to make their own heroes.
You can legally talk about it in the Isles, but either everyone knows, or nobody cares.`,
    },
  ],
  links: [
    { title: 'Bound by NDA Badge', href: 'https://homecoming.wiki/wiki/Bound_by_NDA_Badge' },
    { title: `Crey's Dirty Secret Badge`, href: 'https://homecoming.wiki/wiki/Crey%27s_Dirty_Secret_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/bound-by-nda.png',
  requirements: [
    { key: OnlyLoveCanHurtLikeThis.key, type: 'mission', missionKey: OnlyLoveCanHurtLikeThis.key },
  ],
}
