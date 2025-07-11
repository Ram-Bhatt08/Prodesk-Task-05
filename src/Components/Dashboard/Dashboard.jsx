import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import './Dashboard.css';

const StatCard = ({ title, value, className }) => (
  <div className={`card ${className}`}>
    <h3>{title}</h3>
    <p className="value">₹{value.toFixed(2)}</p>
  </div>
);

const Dashboard = () => {
  const budgets = useSelector((state) => state.budgets.budgets);

  const totalBudget = budgets.reduce((sum, b) => sum + parseFloat(b.amount || 0), 0);
  const totalUsed = budgets.reduce((sum, b) => sum + parseFloat(b.used || 0), 0);
  const totalLeft = totalBudget - totalUsed;
  const usedPercentage = totalBudget > 0 ? (totalUsed / totalBudget) * 100 : 0;

  return (
    <div className="dashboard-wrapper">
      <Header title="Dashboard" />
      <div className="dashboard-container">
        <h2 className="dashboard-header">Financial Overview</h2>

        <div className="cards-container">
          <StatCard title="Total Budget" value={totalBudget} className="total" />
          <StatCard title="Total Used" value={totalUsed} className="used" />
          <StatCard title="Balance Left" value={totalLeft} className="left" />
        </div>

        <div className="dashboard-summary">
          <p>
            You've used <strong>{usedPercentage.toFixed(1)}%</strong> of your total budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

