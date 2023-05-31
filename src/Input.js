// MUI関連のインポート
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

// 画面遷移用のモジュールのインポート
import { Link } from "react-router-dom";


export default function Input() {

    return (
        <div className="background-image">
            {/* ページタイトル */}
            <h1 className="text_center input_title">ID・趣味入力画面</h1>

            <h3 className="text_center">①：IDを入力してください。</h3>

            {/* IDを入力するためのテキストフィールド */}
            <div className="button_center">
                <TextField
                    required
                    id="outlined-required"
                    label="あなたの任意のID"
                />
            </div>

            <h3 className="text_center">②：あなたの趣味を選択してください。</h3>

            {/* 趣味を入力するためのチェックボタン */}
            <Grid container spacing={0} className="text_center">

                <Grid item xs={2.5}>
                </Grid>

                <Grid item xs={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="旅行" />
                        <FormControlLabel control={<Checkbox />} label="キャンプ" />
                        <FormControlLabel control={<Checkbox />} label="フィギュア収集" />
                        <FormControlLabel control={<Checkbox />} label="石ころ集め" />
                        <FormControlLabel control={<Checkbox />} label="ゲーム" />
                    </FormGroup>
                </Grid>

                <Grid item xs={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="昆虫観察" />
                        <FormControlLabel control={<Checkbox />} label="アニメ" />
                        <FormControlLabel control={<Checkbox />} label="廃墟探索" />
                        <FormControlLabel control={<Checkbox />} label="編み物" />
                        <FormControlLabel control={<Checkbox />} label="人間観察" />
                    </FormGroup>
                </Grid>

                <Grid item xs={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="釣り" />
                        <FormControlLabel control={<Checkbox />} label="占い" />
                        <FormControlLabel control={<Checkbox />} label="園芸" />
                        <FormControlLabel control={<Checkbox />} label="オカルト" />
                        <FormControlLabel control={<Checkbox />} label="温泉巡り" />
                    </FormGroup>
                </Grid>

                <Grid item xs={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="ヒトカラ" />
                        <FormControlLabel control={<Checkbox />} label="楽器演奏" />
                        <FormControlLabel control={<Checkbox />} label="アイドル" />
                        <FormControlLabel control={<Checkbox />} label="映画鑑賞" />
                        <FormControlLabel control={<Checkbox />} label="野球観戦" />
                    </FormGroup>
                </Grid>
            </Grid>

            <h3 className="text_center">③：ID・趣味を保存してください。</h3>

            {/* 趣味・IDを保存するためのボタン */}
            <div className='button_center'>
            <a className="btn_purple btn-malformation_purple">ID・趣味を保存</a>
            </div>

            <h3 className="text_center">④：トップページにお戻りください。</h3>

            {/* トップページに戻るためのボタン */}
            <div className='button_center input_last_button'>
                <Link to={"/"}>
                <a href="" className="btn_red btn-malformation_red">トップページへ</a>
                </Link>
            </div>
        </div>
    );
}