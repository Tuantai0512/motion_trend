import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header-navbar')}>
                <div className={cx('header-navbar-list')}>
                    <img src={images.logo} alt="Motion-trend" className={cx('logo-icon')}></img>
                    <span>Discover</span>
                    <span>Job</span>
                </div>
                <div className={cx('header-navbar-list')}>
                    <input className={cx('search-input')} placeholder="Search for motion trend......"></input>
                </div>
                <div className={cx('header-navbar-list')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                    <span>Login</span>
                    <span>Sign up</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
