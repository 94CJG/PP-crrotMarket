import 'styled-components';

export interface DefalutTheme {
	textColor: string;
	bgColor: string;
}

declare module "*.svg" {
  const content: any;
  export default content;
}


