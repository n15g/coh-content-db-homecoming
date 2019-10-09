import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const EntrustedWithTheSecret: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "entrusted-with-the-secret",
    names: [
        {value: "Entrusted with the Secret"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have been exposed to Time Travel and have been granted access to the Ouroboros Citadel. You can find the power to summon forth a portal there in your Temporary Powers tray."},
    ],
    acquisition: "Complete a story arc that gives a time travel-related Souvenir, or obtain any time travel-related Badges.",
    notes: "This badge is rewarded to Heroes and Villains who have done one of the following:\n" +
        "\n" +
        "* Earned any Time Travel related Badge\n" +
        "* Earned any Time Travel related souvenir\n" +
        "* Completed a Time Travel mission, including any mission via the Flashback system.\n" +
        "\n" +
        "See the Paragon Wiki link for a detailed list of badges and missions that will grant this badge.",
    effect: "Ouroboros Portal",
    links: [
        {title: "Entrusted with the Secret Badge", href: "https://paragonwiki.com/wiki/Entrusted_with_the_Secret_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/entrusted-with-the-secret.png"}]
};
