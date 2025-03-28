import { BadgeData, zoneLink } from 'coh-content-db'
import { TheAbyss } from '../../zone/the-abyss'

export const AbyssalGaze: BadgeData = {
  type: 'EXPLORATION',
  key: 'abyssal-gaze',
  setTitle: { id: 1867 },
  name: [{ value: 'Abyssal Gaze' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: TheAbyss.key,
  loc: [1061, -48, -2222],
  badgeText: [{
    value: `A yawning void opens before you, a testament to Hamidon's power, but you are unmoved. You have seen true darkness first hand and it has not kept you from pressing onward.
You carry enough darkness within you and it's going to take a lot more than a big hole in the ground to impress you.
You've gazed into the abyss, and it's gazed into you too; you're both well acquainted with each other and have few secrets left to share.`,
  }],
  notes: `Located in ${zoneLink(TheAbyss)}, 0.60 miles from the Grandville transfer point, on the lip of the cliff dropping into the crater. It is in the southern edge, just west of center.`,
  links: [
    { title: 'Abyssal Gaze Badge', href: 'https://homecoming.wiki/wiki/Abyssal_Gaze_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
