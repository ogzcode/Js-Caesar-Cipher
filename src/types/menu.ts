export interface MenuItem {
    key: string
    label: string
    icon: string
    ariaLabel?: string
}

export interface MenuGroup {
    title: string
    items: MenuItem[]
}

export type MenuData = MenuGroup[] 