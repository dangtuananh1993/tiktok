/** @format */

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faSignIn,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import Button from "~/component/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/Proper/Menu";
import { UploadIcon } from "~/component/icons";
import Image from "~/component/Image";
import Search from "../Search";
import routeConfig from "~/config/routes";

const cx = classNames.bind(styles);

const handleMenuChange = (menuItem) => {
    console.log(menuItem);
};

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vn",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "View profile",
        to: "/@hoaa",
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Get coin",
        to: "/coin",
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Setting",
        to: "/setting",
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: "Log out",
        to: "/logout",
        separate: true,
    },
];

function Header() {
    const currentUser = 1;

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <Link to={routeConfig.home} className={cx("logo-link")}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement="bottom">
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                primary
                                leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? USER_MENU : MENU_ITEM}
                        onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://ap16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6c27246710a0a15fb658c6eb296be95d~c5_100x100.jpeg?x-expires=1653408000&x-signature=i7YBJWEeAfHNSumKsu4yMGZH4v4%3D"
                                alt="Nguyen Van AA"
                                fallback="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
