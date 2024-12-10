import styles from './Avatar.module.css'; 
import PropTypes from 'prop-types';

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    hasBorder: PropTypes.bool,
};

export function Avatar({ hasBorder = true, src  }) {
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    );
}  
