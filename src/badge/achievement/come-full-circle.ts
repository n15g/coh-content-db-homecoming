import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ComeFullCircle: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "come-full-circle",
    setTitleId: 1464,
    names: [
        {value: "Come Full Circle"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You ended up back right where you started, coming full circle from Hero to Villain and back " +
                "again."
        },
        {
            type: Alternate.V, value: "You ended up back right where you started, coming full circle from Villain to Hero and back " +
                "again."
        }
    ],
    acquisition: "Return to your original alignment (Hero or Villain)",
    links: [
        {title: "Come Full Circle Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Come_Full_Circle_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/come-full-circle-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/come-full-circle-v.png"}
    ],
};
