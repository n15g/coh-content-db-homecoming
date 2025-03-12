import { BadgeData } from 'coh-content-db'

export const MaskMaker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'mask-maker',
  setTitle: { id: 333 },
  name: [
    { value: 'Mask Maker' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'You obtained \'samples\' from the notorious Facemaker.' },
  ],
  acquisition: 'Complete the Steal samples of the Facemaker\'s chemicalsmission from Dr. Shelly Percey',
  links: [
    { title: 'Mask Maker Badge', href: 'https://homecoming.wiki/wiki/Mask_Maker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-2.png' },
  ],
}
