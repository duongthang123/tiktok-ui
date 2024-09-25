// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/componets/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2dede1b9594bb3a6f31e3be8949b25e6.jpeg?lk3s=a5d48078&nonce=98851&refresh_token=c85eb473d20e4d9e47a86486e497cf37&x-expires=1727406000&x-signature=M5QeaXwnxgKMTHcj%2BmUHF%2Ffc4n4%3D&shp=a5d48078&shcp=81f88b70"
                        alt=""
                    />

                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>thangdv</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Dương Thắng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
