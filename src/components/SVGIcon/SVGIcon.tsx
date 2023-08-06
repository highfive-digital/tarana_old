import { ArrowRight, Heart, Play, SearchIcon, Stop } from '~assets/svgs';
import { type SVG } from '~types/components.types';

const SVGMap: { [key in SVG]: { component: any } } = {
  SEARCH: { component: SearchIcon },
  HEART: { component: Heart },
  ARROW_RIGHT: { component: ArrowRight },
  PLAY: { component: Play },
  STOP: { component: Stop }
};

interface SVGIconProps {
  icon: SVG;
  height: number;
  width: number;
  fill: string;
  backgroundColor?: string;
}

const SVGIcon: React.FC<SVGIconProps> = (props) => {
  const { icon, ...rest } = props;
  const svgElement = icon ? SVGMap[icon] : null;
  return svgElement ? <svgElement.component {...rest} /> : null;
};

export default SVGIcon;
