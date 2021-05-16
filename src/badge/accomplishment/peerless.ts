import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Peerless: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "peerless",
    setTitleId: 734,
    names: [
        {type: Alternate.H, value: "Peerless"},
        {type: Alternate.V, value: "Recluse's Rival"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H, value: "You have taken down Lord Recluse himself, something few others have been able to accomplish. " +
                "One only hopes there is a prison strong enough to contain him."
        },
        {
            type: Alternate.V, value: "Lord Recluse has commented that he had underestimated you as a hero, and will not do the same " +
                "as a villain."
        }
    ],
    acquisition: "Defeat Lord Recluse within the Ms. Liberty Task Force",
    links: [
        {title: "Peerless Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Peerless_Badge"},
        {title: "Recluse's Rival Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Recluse%27s_Rival_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/defeatrecluse.png"}
    ],
};
