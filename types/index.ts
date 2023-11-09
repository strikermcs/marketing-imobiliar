export type TAdminSettingTab = 'AdminMain' | 'AdminPromo' | 'AdminServices' |
                                'AdminPricesAndServices'

export interface IAdminMenuItem { 
    id: number
    text: string
    page: TAdminSettingTab
}

export interface IPromoSection {
    id?: string
    title: string
    subtitle: string
    boldText: string
    description: string
}

export interface IServiceSectionItem {
    id?: string
    title: string
    description: string
    image: string
}