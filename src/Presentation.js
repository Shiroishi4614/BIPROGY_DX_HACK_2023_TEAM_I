import React, { useState } from 'react';

// MUI関連のインポート
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// 画像のインポート
import Image1 from "./images/bdh_1.png"
import Image2 from "./images/bdh_2.png"
import Image3 from "./images/bdh_3.png"
import Image4 from "./images/bdh_4.png"

// 画面遷移用のモジュールのインポート
import { Link } from "react-router-dom";


export default function Presentation() {

    // 共通の趣味を格納するためのState
    const [displayText, setDisplayText] = useState('');

    // 画像をフェードインで表示させるためのState
    const [isImageVisible, setIsImageVisible] = useState(false);

    // 共通の趣味をdsplayTextに格納するための関数
    const handleButtonClick1 = () => {
        setDisplayText('"占い、楽器演奏、野球観戦"');
    };

    // 共通の趣味をdsplayTextに格納するための関数
    const handleButtonClick2 = () => {
        setTimeout(() => {
            setIsImageVisible(true);
        }, 5000);
    };

    return (
        <div className="background-image">
            {/* ページタイトル */}
            <h1 className="text_center presentation_title">共通趣味確認画面</h1>

            <h3 className="text_center presentation_sentence">①：ユーザーのIDを入力してください。</h3>

            {/* IDを入力するためのテキストフィールド */}
            <Grid container spacing={0} className="text_center">
                <Grid item xs={3}>
                </Grid>

                <Grid item xs={3}>
                    {/* IDを入力するためのテキストフィールド */}
                    <TextField
                        required
                        id="outlined-required"
                        label="一人目のID"
                    />
                </Grid>

                <Grid item xs={3}>
                    {/* IDを入力するためのテキストフィールド */}
                    <TextField
                        required
                        id="outlined-required"
                        label="二人目のID"
                    />
                </Grid>

                <Grid item xs={3}>
                </Grid>
            </Grid>

            <h3 className="text_center">②：共通の趣味を表す画像を生成してください。</h3>

            {/* 画像を生成するためのボタン */}
            <div className='button_center '>
                <a className="btn_orange btn-malformation_orange" onClick={handleButtonClick2}>共通の趣味を表す画像を生成</a>
            </div>

            {/* 画像一覧 */}
            <div className='button_center'>
                {isImageVisible && (
                    <ImageList sx={{ width: 1200, height: 300 }} cols={4} rowHeight={1}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    className='fade-in delayed-show'
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                )}
            </div>

            <h3 className="text_center">③：共通の趣味を確認してください。</h3>

            {/* プロンプトを表示するためのボタン */}
            <div className='button_center '>
                <a className="btn_green btn-malformation_green" onClick={handleButtonClick1}>共通の趣味を確認</a>
            </div>

            <h2 className="text_center presentation_prompt">{displayText}</h2>

            <h3 className="text_center">④：トップページにお戻りください。</h3>

            {/* トップページに戻るためのボタン */}
            <div className='button_center presentation_last_button'>
                <Link to={"/"}>
                    <a className="btn_yellow btn-malformation_yellow">トップページへ</a>
                </Link>
            </div>
        </div>
    );
}

const itemData = [
    {
        img: Image1,
        title: 'image1',
    },
    {
        img: Image2,
        title: 'image2',
    },
    {
        img: Image3,
        title: 'image3',
    },
    {
        img: Image4,
        title: 'image4',
    },
];