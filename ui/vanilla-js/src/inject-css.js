import style from './styles.css';
import highlight from './highlight-js.css';

const headEl = document.head || document.getElementsByTagName('head')[0];
const styleEl = document.createElement('style');
if(styleEl.styleSheet) {
  styleEl.styleSheet.cssText = `${style}\n${highlight}`;
} else {
  styleEl.appendChild(document.createTextNode(style));
}
headEl.appendChild(styleEl);