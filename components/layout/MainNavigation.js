import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Board games</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All board games</Link>
          </li>
          <li>
            <Link href='/new-game'>Add new game</Link>
          </li>
          <li>
            <Link href='/events'>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
