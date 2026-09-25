import { NavLink } from 'react-router-dom';
import { LayoutGrid, UserPlus, Info, BarChart3 } from 'lucide-react';
import { cn } from '../../lib/cn';
import ptBR from '../../i18n/ptBR';
import './Navbar.css';

const links = [
  { to: '/', label: ptBR.nav.home, icon: LayoutGrid, end: true },
  { to: '/cadastro', label: ptBR.nav.cadastro, icon: UserPlus },
  { to: '/painel', label: ptBR.nav.dashboard, icon: BarChart3 },
  { to: '/sobre', label: ptBR.nav.sobre, icon: Info },
];

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <ul>
        {links.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => cn('navbar__link', isActive && 'navbar__link--active')}
            >
              <Icon size={18} aria-hidden="true" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
