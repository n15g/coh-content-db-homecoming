import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unveiler: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "unveiler",
    names: [
        {value: "Unveiler"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have shown great endurance in tackling the Fake Nemesis robots time and time again in your search for the real Nemesis."}],
    acquisition: "Defeat 100 Fake Nemesis robots.",
    notes: "Fake Nemesis only spawn at or above level 40." +
        "\n\nA Prototype False Nemesis appears in the Take on the false Nemesis mission from Anton Sampson, but it **does not** count towards the number required for the Unveiler badge.",
    links: [
        {title: "Unveiler Badge", href: "https://paragonwiki.com/wiki/Unveiler_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/unveiler.png"}]
};
