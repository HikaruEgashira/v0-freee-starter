import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/globals.css'
import { HeroSplit } from './index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HeroSplit
    title="サンプルタイトル"
    description="サンプル説明テキスト"
    primaryAction={{ label: "はじめる", href: "#" }}
    secondaryAction={{ label: "ドキュメント", href: "#" }}
  />
)
