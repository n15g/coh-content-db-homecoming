import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FoodCritic: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "food-critic",
    names: [
        {value: "Food Critic"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reject 100 recipe drops.",
    links: [
        {title: "Food Critic Badge", href: "https://paragonwiki.com/wiki/Food_Critic_Badge"}
    ],
};
