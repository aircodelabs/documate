export interface DocumateProps {
  endpoint: string;
  askAILabel?: string;
  placeholder?: string;
  quickActions?: string[];
}

export { default as Documate } from './Documate.vue';