import type { MenuData } from '@/types/menu'
import {
    LayoutDashboard,
    Users,
    Package,
    FileText,
    BarChart3,
    DollarSign,
    Settings,
    Type
} from 'lucide-vue-next'

export const menuIcons = {
    dashboard: LayoutDashboard,
    users: Users,
    products: Package,
    reports: FileText,
    analytics: BarChart3,
    finance: DollarSign,
    settings: Settings,
    type: Type
}

export const menuData: MenuData = [
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
        title: 'Yönetim',
        items: [
            {
                key: 'users',
                label: 'Kullanıcılar',
                icon: 'users',
                ariaLabel: 'Kullanıcılar sayfasına git',
                route: '/users'
            },
            {
                key: 'products',
                label: 'Ürünler',
                icon: 'products',
                ariaLabel: 'Ürünler sayfasına git',
                route: '/products'
            }
        ]
    },
    {
        title: 'Raporlar',
        items: [
            {
                key: 'reports',
                label: 'Raporlar',
                icon: 'reports',
                ariaLabel: 'Raporlar sayfasına git',
                route: '/reports'
            },
            {
                key: 'analytics',
                label: 'Analitik',
                icon: 'analytics',
                ariaLabel: 'Analitik sayfasına git',
                route: '/analytics'
            },
            {
                key: 'finance',
                label: 'Finans',
                icon: 'finance',
                ariaLabel: 'Finans sayfasına git',
                route: '/finance'
            }
        ]
    },
    {
        title: 'Sistem',
        items: [
            {
                key: 'settings',
                label: 'Ayarlar',
                icon: 'settings',
                ariaLabel: 'Ayarlar sayfasına git',
                route: '/settings'
            }
        ]
    }
] 