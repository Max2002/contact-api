import './header.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Button from '../../components/button/Button';
import SignIn from '../signIn/SignIn';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

export default function Header() {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <header className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu">
        <ul className="menu_nav">
          <li className="menu-nav_item">Home</li>
        </ul>
        <div className="signIn">
          <Button type="button" className="signIn_btn" onClick={handleSignIn}>
            <svg
              viewBox="64 64 896 896"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8
                7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3
                137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0
                47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6
                866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270
                762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2
                368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02
                624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010
                12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"
              />
            </svg>
            <span>Sign In</span>
          </Button>
        </div>
      </div>
      <div
        className={clsx('blur-block', { isBlur: isSignIn })}
        onClick={handleSignIn}
      />
      {isSignIn && <SignIn />}
    </header>
  );
}
