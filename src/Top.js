// MUI関連のインポート
import Grid from '@mui/material/Grid';

// 画面遷移用のモジュールのインポート
import { Link } from "react-router-dom";


export default function Top() {

    return (
        <div className="background-image">
            {/* ページタイトル */}
            <h1 className="text_center top_title">Hobby Palette</h1>

            {/* システムの説明文 */}
            <div className="top_sentence">
                <p className="text_center">"Hobby Palette"を使用することで、お互いの共通の趣味を表す画像を見ることができます！</p>
                <p className="text_center">お互いに共通の趣味しか知られないので、人に言いにくい趣味も選択できます！！</p>
                <p className="text_center">自分のID・趣味を入力し、画像を生成してみましょう！！！</p>
            </div>

            {/* 画面遷移用のボタン */}
            <div className="top_button">
                <Grid container spacing={0} className="text_center">
                    <Grid item xs={6}>
                        <Link to={"/input"}>
                            <a href="" className="btn_blue btn-malformation_blue">ID・趣味を入力</a>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to={"/presentation"}>
                            <a href="" className="btn_indigo btn-malformation_indigo">共通の趣味を発見</a>
                        </Link>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}