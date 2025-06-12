import type { MenuData } from '@/types/menu'
import {
    LayoutDashboard,
    Users,
    Package,
    FileText,
    BarChart3,
    DollarSign,
    Settings
} from 'lucide-vue-next'

export const menuIcons = {
    dashboard: LayoutDashboard,
    users: Users,
    products: Package,
    reports: FileText,
    analytics: BarChart3,
    finance: DollarSign,
    settings: Settings
}

export const menuData: MenuData = [
    {
        title: 'Ana Sayfa',
        items: [
            {
                key: 'dashboard',
                label: 'Dashboard',
                icon: 'dashboard',
                ariaLabel: 'Dashboard sayfasına git'
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
                ariaLabel: 'Kullanıcılar sayfasına git'
            },
            {
                key: 'products',
                label: 'Ürünler',
                icon: 'products',
                ariaLabel: 'Ürünler sayfasına git'
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
                ariaLabel: 'Raporlar sayfasına git'
            },
            {
                key: 'analytics',
                label: 'Analitik',
                icon: 'analytics',
                ariaLabel: 'Analitik sayfasına git'
            },
            {
                key: 'finance',
                label: 'Finans',
                icon: 'finance',
                ariaLabel: 'Finans sayfasına git'
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
                ariaLabel: 'Ayarlar sayfasına git'
            }
        ]
    }
] 