import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // 根据当前语言和UI设计，创建合适的按钮样式
  return (
    <div>
      <button onClick={() => changeLanguage('zh')} className={
        i18n.language === 'zh' ? 'font-bold mx-1' : 'mx-1'
      }>中文</button>
      <button onClick={() => changeLanguage('en')} className={
        i18n.language === 'en' ? 'font-bold mx-1' : 'mx-1'
      }>English</button>
      <button onClick={() => changeLanguage('ja')} className={
        i18n.language === 'ja' ? 'font-bold mx-1' : 'mx-1'
      }>日本語</button>
    </div>
  );
} 