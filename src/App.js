import React, { useState } from 'react';

// 画面遷移用のモジュールのインポート
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 遷移先コンポーネントのインポート
import Top from './Top';
import Input from './Input';
import Presentation from './Presentation';

// cssのインポート
import "./App.css"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/presentation" element={<Presentation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}