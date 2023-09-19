import style from './styles.css';

const headEl = document.head || document.getElementsByTagName('head')[0];
const styleEl = document.createElement('style');
if(styleEl.styleSheet) {
  styleEl.styleSheet.cssText = style;
} else {
  styleEl.appendChild(document.createTextNode(style));
}
headEl.appendChild(styleEl);