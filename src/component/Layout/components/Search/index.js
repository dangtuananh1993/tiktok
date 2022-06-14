/** @format */

import { useState, useEffect, useRef } from "react";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as ProperWrapper } from "~/Proper";
import AccountItem from "~/component/AccountItem";
import classNames from "classnames/bind";

import request from "~/utils/request";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
import Button from "~/component/Button";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        request
            .get('users/search', {
                params: {
                    q: debounced,
                    type: "less",
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(" ")) {
            setSearchValue(searchValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <ProperWrapper>
                        <h4 className={cx("search-label")}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </ProperWrapper>
                </div>
            )}>
            <div className={cx("search")}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search account and videos"
                    spellCheck={false}
                    value={searchValue}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx("clear")}
                        onClick={() => {
                            setSearchValue("");
                            setSearchResult([]);
                            inputRef.current.focus();
                        }}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    />
                )}
                <button
                    className={cx("search-btn")}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
