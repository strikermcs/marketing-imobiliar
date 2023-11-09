import type { IAdminMenuItem } from "~/types";

export const adminMenu : IAdminMenuItem[] = [
    {
        id: 0,
        text: 'Main',
        page: 'AdminMain'
    },

    {
        id: 1,
        text: 'Section Promo',
        page: 'AdminPromo'
    },

    {
        id: 2,
        text: 'Section Services',
        page: 'AdminServices'
    },

    {
        id: 3,
        text: 'Prices for services',
        page: 'AdminPricesAndServices'
    },
] 