import { useCallback } from 'react';
import { type NavGroup, type NavItem } from '@/types';
import { LayoutDashboard, Plane, Map } from 'lucide-react';
import { route } from 'ziggy-js';


export function useMobileNavigation() {
  const main: NavGroup[] = [
    {
      title: 'Main Menu',
      items: [
        {
          title: 'Dashboard',
          href: route('dashboard'),
          isActive: route().current('dashboard'),
          icon: LayoutDashboard,
        },
        {
          title: 'Admin Dashboard',
          href: route('admin.dashboard'),
          isActive: route().current('admin.dashboard'),
          icon: LayoutDashboard,
        },
        {
          title: 'Airlines',
          href: route('admin.airlines.index'),
          isActive: route().current('admin.airlines.*'),
          icon: Plane,
        },
        {
          title: 'Routes',
          href: route('admin.routes.index'),
          isActive: route().current('admin.routes.*'),
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
