import { useCallback } from 'react';
import { type NavGroup, type NavItem } from '@/types';
import { LayoutDashboard, Plane, Map } from 'lucide-react';

// Impor semua route yang kita butuhkan
import { dashboard } from '@/routes';
import { index as adminDashboard } from '@/routes/admin/dashboard';
import { index as airlinesIndex } from '@/routes/admin/airlines';
import { index as routesIndex } from '@/routes/admin/routes';

export function useMobileNavigation() {
    const main: NavGroup[] = [
        {
            title: 'Main Menu',
            items: [
                {
                    title: 'Dashboard',
                    href: dashboard(),
                    isActive: dashboard.isCurrent(),
                    icon: LayoutDashboard,
                },
                {
                    title: 'Admin Dashboard',
                    href: adminDashboard(),
                    isActive: adminDashboard.isCurrent(),
                    icon: LayoutDashboard,
                },
                {
                    title: 'Airlines',
                    href: airlinesIndex(),
                    isActive: airlinesIndex.isCurrent({ wildcards: true }),
                    icon: Plane,
                },
                {
                    title: 'Routes',
                    href: routesIndex(),
                    isActive: routesIndex.isCurrent({ wildcards: true }),
                    icon: Map,
                },
            ],
        },
    ];

    const settings: NavGroup[] = [];
    const footer: NavItem[] = [];

    const cleanup = useCallback(() => {
        document.body.style.removeProperty('pointer-events');
    }, []);

    return { main, settings, footer, cleanup };
}