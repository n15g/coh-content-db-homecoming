import { BadgeData } from 'coh-content-db'
import { GetSamplesOfTheFacemakersChemicals } from '../../mission/get-samples-of-the-facemakers-chemicals'

export const MaskMaker: BadgeData = {
  type: 'accomplishment',
  key: 'mask-maker',
  setTitleId: [333],
  name: 'Mask Maker',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You obtained 'samples' from the notorious Facemaker.`,
  links: [
    { title: 'Mask Maker Badge', href: 'https://homecoming.wiki/wiki/Mask_Maker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-2.png',
  requirements: [
    { key: GetSamplesOfTheFacemakersChemicals.key, type: 'mission', missionKey: GetSamplesOfTheFacemakersChemicals.key },
  ],
}
