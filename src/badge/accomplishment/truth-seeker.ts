import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const TruthSeeker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "truth-seeker",
    setTitleId: 2566,
    names: [
        {value: "Truth Seeker"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{value: `No mystery is too small to intrigue you. You gave Erin West closure by uncovering the truth about her mentor's death.`}],
    acquisition: `Complete bonus objectives Erin West's story arc Cutting Back Old Growth.`,
    links: [
        {title: 'Truth Seeker Badge', href: 'https://homecoming.wiki/wiki/Truth_Seeker_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/truth-seeker.png'}
    ],
};
