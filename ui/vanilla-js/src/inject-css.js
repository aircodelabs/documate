import style from './styles/styles.css';
import highlight from './styles/highlight-js.css';

const headEl = document.head || document.getElementsByTagName('head')[0];
const styleEl = document.createElement('style');
const styleText = `${style}\n${highlight}`;
if(styleEl.styleSheet) {
  styleEl.styleSheet.cssText = styleText;
} else {
  styleEl.appendChild(document.createTextNode(styleText));
}
headEl.appendChild(styleEl);