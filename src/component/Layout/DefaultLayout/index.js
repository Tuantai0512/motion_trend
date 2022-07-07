import Header from './Header';
import Button from './Button';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className={cx('button-list')}>
                <Button text="Movies" />
                <Button text="Sound, Beat" />
                <Button text="Graphic" />
                <Button text="Movies" />
                <Button text="Sound, Beat" />
                <Button text="Graphic" />
                <Button text="Movies" />
            </div>
            <div className={cx('motion-status')}>
                <div className={cx('motion-status-list')}>
                    <a href='/'>Motion trend pick</a>
                    <a href='/'>Latest</a>
                    <a href='/'>Recommended</a>
                </div>
                <div className={cx('motion-status-list')}>
                    <span>Selection criteria</span>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
