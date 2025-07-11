import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // 

const Sidebar = () => (
  <div className="sidebar">
    <h3>Payment Guru</h3>
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'active' : ''}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/budgets" className={({ isActive }) => isActive ? 'active' : ''}>
            Budgets
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={({ isActive }) => isActive ? 'active' : ''}>
            Transactions
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;

