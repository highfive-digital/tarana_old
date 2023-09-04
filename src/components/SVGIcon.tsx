import {
  ArrowDown,
  ArrowRight,
  Backward10,
  Close,
  Forward10,
  Headphone,
  Heart,
  HeartFilled,
  History,
  MoreMenu,
  New,
  NextPlay,
  Play,
  PlayCircle,
  PrevPlay,
  RecentSearch,
  SearchIcon,
  Share,
  Sleep,
  Stop,
  StopCircle,
  Trending
} from '~assets/svgs';
import { type SVG } from '~types/components.types';

const SVGMap: { [key in SVG]: { component: any } } = {
  SEARCH: { component: SearchIcon },
  HEART: { component: Heart },
  ARROW_RIGHT: { component: ArrowRight },
  PLAY: { component: Play },
  STOP: { component: Stop },
  ARROW_DOWN: { component: ArrowDown },
  PLAY_CIRCLE: { component: PlayCircle },
  STOP_CIRCLE: { component: StopCircle },
  MORE: { component: MoreMenu },
  PREV: { component: PrevPlay },
  NEXT: { component: NextPlay },
  FORWARD: { component: Forward10 },
  BACKWARD: { component: Backward10 },
  SHARE: { component: Share },
  SLEEP: { component: Sleep },
  HEART_FILLED: { component: HeartFilled },
  NEW: { component: New },
  TRENDING: { component: Trending },
  HEADPHONE: { component: Headphone },
  RECENT_SEARCH: { component: RecentSearch },
  HISTORY: { component: History },
  CLOSE: { component: Close }
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
