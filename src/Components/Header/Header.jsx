import './Header.css';
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p className="tagline">Your Personal Finance Tracker</p>
    </header>
  );
};

export default Header;
