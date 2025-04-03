import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { DrShellyPercey } from '../../contact/dr-shelly-percey'

export const MaskMaker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'mask-maker',
  setTitle: { id: 333 },
  name: 'Mask Maker',
  alignment: ['V'],
  badgeText: `You obtained 'samples' from the notorious Facemaker.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Steal Facemaker's Reanimation Chemicals" entry with number 6.19 in the 10-14 level range.`,
  links: [
    { title: 'Mask Maker Badge', href: 'https://homecoming.wiki/wiki/Mask_Maker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-2.png',
  requirements: [
    { key: 'get-samples-of-the-facemakers-chemicals', type: 'MISSION', missionName: `Get Samples of the Facemaker's Chemicals`, contactKey: DrShellyPercey.key },
  ],
}
