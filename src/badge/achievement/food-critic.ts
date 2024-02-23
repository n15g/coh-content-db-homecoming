import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FoodCritic: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "food-critic",
    setTitleId: 2393,
    names: [
        {value: "Food Critic"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You don't want the same old recipes, you want something exotic.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png"}],
    acquisition: "Reject 100 recipe drops",
    links: [
        {title: "Food Critic Badge", href: "https://homecoming.wiki/wiki/Food_Critic_Badge"}
    ],
};
