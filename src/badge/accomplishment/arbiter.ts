import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Arbiter: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "arbiter",
    setTitleId: 1294,
    names: [
        {value: "Arbiter"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Taking down Reichsman and making fools out of Lord Recluse's lieutenants might just be the " +
        "most profitable and satisfying job you've ever pulled."}
    ],
    acquisition: "Complete the Barracuda Strike Force: Thus Spoke the Reichsman",
    links: [
        {title: "Arbiter Badge", href: "https://paragonwiki.com/wiki/Arbiter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/arbiter.png"}
    ],
};