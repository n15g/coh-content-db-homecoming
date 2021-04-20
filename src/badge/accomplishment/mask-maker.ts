import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const MaskMaker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "mask-maker",
    setTitleId: 333,
    names: [
        {value: "Mask Maker"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You obtained 'samples' from the notorious Facemaker."}
    ],
    acquisition: "Complete the Steal samples of the Facemaker's chemicalsmission from Dr. Shelly Percey",
    links: [
        {title: "Mask Maker Badge", href: "https://paragonwiki.com/wiki/Mask_Maker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-2.png"}
    ],
};
