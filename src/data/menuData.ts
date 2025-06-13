import type { MenuData } from '@/types/menu'
import {
    LayoutDashboard,
    Users,
    Package,
    FileText,
    BarChart3,
    DollarSign,
    Settings,
    Type,
    Star
} from 'lucide-vue-next'

export const menuIcons = {
    dashboard: LayoutDashboard,
    users: Users,
    products: Package,
    reports: FileText,
    analytics: BarChart3,
    finance: DollarSign,
    settings: Settings,
    type: Type,
    bounce: Star
}

export const menuData: MenuData = [
    {
        title: 'Basic Animations',
        items: [
            {
                key: 'bounce',
                label: 'Bounce',
                icon: 'bounce',
                ariaLabel: 'Bounce',
                route: '/bounce'
            }
        ]
    },
    {
        title: 'Text',
        items: [
            {
                key: 'reveal-text',
                label: 'Reveal Text',
                icon: 'type',
                ariaLabel: 'Reveal Text',
                route: '/reveal-text'
            }
        ]
    },
    {
        title: 'Advanced Animations',
        items: [
            {
                key: 'slider',
                label: 'Slider',
                icon: 'slider',
                ariaLabel: 'Slider',
                route: '/slider'
            }
        ]
    }
] 