import { BadgeData } from 'coh-content-db'
import { TheAbyss } from '../../zone/the-abyss'

export const AbyssalGaze: BadgeData = {
  type: 'exploration',
  key: 'abyssal-gaze',
  setTitleId: [1867],
  name: 'Abyssal Gaze',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `A yawning void opens before you, a testament to Hamidon's power, but you are unmoved. You have seen true darkness first hand and it has not kept you from pressing onward.
You carry enough darkness within you and it's going to take a lot more than a big hole in the ground to impress you.
You've gazed into the abyss, and it's gazed into you too; you're both well acquainted with each other and have few secrets left to share.`,
  notes: `Located 0.60 miles from the Grandville transfer point, on the lip of the cliff dropping into the crater. It is in the southern edge, just west of center.`,
  links: [
    { title: 'Abyssal Gaze Badge', href: 'https://homecoming.wiki/wiki/Abyssal_Gaze_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheAbyss.key, coords: [1061, -48, -2222], icon: 'badge', iconText: '8' } },
  ],
}
