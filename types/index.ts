export type TAdminSettingTab = 'AdminMain' | 'AdminPromo' | 'AdminServices' |
                                'AdminPricesAndServices' | 'AdminBenefits' |
                                'AdminQuestions' | 'AdminTestimonials' |
                                'AdminGallery'

export type TServicePrice = 'PriceOnRequest' | 'Free' | number

export type TSocial = 'Youtube' | 'LinkedIn' | 'Instagram' | 'Tiktok' | 'Facebook'
export type TMailType = 'order' | 'contact'

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

export interface IQuestion {
    id?: string
    question: string
    answer: string
}

export interface IPricesAndServicesContent {
    id?: string
    text: string
}

export interface IServicePrice {
    id?: string
    title: string
    price: TServicePrice
}

export interface IServiceAndPrice {
    id?: string
    title: string
    contentList?: Array<IPricesAndServicesContent>
    services: Array<IServicePrice>
    exampleUrl?: string
    comment?: string
} 

export interface IGalleryImage {
    id?: string
    image: string
}

export interface ITestimonial {
    id?: string
    clientName: string
    jobTitle: string
    testimonial: string
}

export interface ISocialsContacts {
    id?: string
    social: TSocial
    link: string
}

export interface IAdditionalInfo {
    id?: string
    tel: string
    whatsApp: string
    email: string
    portfolioUrl: string
}

export interface IContactMail {
    username: string
    type: string
    contact: string
}

export interface IOrderMail {
    username : string
    email?: string
    phone?: string
    services: IServicePrice[]
    price: number
    text?: string

}

export interface IMail<T> {
    id?: string
    type: TMailType
    mail: T
    isRead: boolean
}
