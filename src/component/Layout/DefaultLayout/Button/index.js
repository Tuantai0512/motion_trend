import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button(props) {
    return ( 
        <div className={cx('button')}>{props.text}</div>
     );
}

export default Button;