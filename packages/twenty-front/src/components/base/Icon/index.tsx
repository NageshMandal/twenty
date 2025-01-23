import React from 'react';

import { FiLogOut } from 'react-icons/fi';
import { GiFairyWand } from 'react-icons/gi';
import { GoFilter, GoLog, GoSortAsc, GoSortDesc } from 'react-icons/go';
import Apartment from './icons/apartment.svg?react';
import ArrowLeft from './icons/arrowLeft.svg?react';
import ArrowUpDown from './icons/arrowUpDown.svg?react';
import Automation from './icons/automation.svg?react';
import BarBox from './icons/barBox.svg?react';
import BarSetting from './icons/barSetting.svg?react';
import Book from './icons/book.svg?react';
import Briefcase from './icons/briefcase.svg?react';
import Building from './icons/building.svg?react';
import Calendar from './icons/calender.svg?react';
import Card from './icons/card.svg?react';
import CheckRing from './icons/checkRing.svg?react';
import Chevron from './icons/chevron.svg?react';
import ChevronDown from './icons/chevron_down.svg?react';
import ChevronUp from './icons/chevron_up.svg?react';
import Chip from './icons/chip.svg?react';
import Circuit from './icons/circuit.svg?react';
import Coin from './icons/coin.svg?react';
import Column from './icons/column.svg?react';
import Company from './icons/company.svg?react';
import Congratulation from './icons/congratulation.svg?react';
import Cross from './icons/cross.svg?react';
import DEmail from './icons/d_email.svg?react';
import DLinkedin from './icons/d_linkedin.svg?react';
import People from './icons/d_people.svg?react';
import DTask1 from './icons/d_task1.svg?react';
import DTask2 from './icons/d_task2.svg?react';
import Dashboard from './icons/dashboard.svg?react';
import Dots9 from './icons/dots9.svg?react';
import DownLoad from './icons/download.svg?react';
import Download2 from './icons/download2.svg?react';
import Earth from './icons/earth.svg?react';
import EditPen from './icons/editPen.svg?react';
import Ellipsis from './icons/ellipsis.svg?react';
import EllipsisVertical from './icons/ellipsisVertical.svg?react';
import Emoji from './icons/emoji.svg?react';
import Envelop from './icons/envelop.svg?react';
import Exchange from './icons/exchange.svg?react';
import Exclamation from './icons/exclamation.svg?react';
import ExclamationDark from './icons/exclamationDark.svg?react';
import Eye from './icons/eye_black.svg?react';
import EyeSlash from './icons/eye_black_slash.svg?react';
import FilterBar from './icons/filterbar.svg?react';
import HandUp from './icons/handUp2.svg?react';
import HubSpot from './icons/hubspot.svg?react';
import Inbox from './icons/inbox.svg?react';
import Industry from './icons/industry.svg?react';
import Lead from './icons/lead.svg?react';
import Link from './icons/link.svg?react';
import Link2 from './icons/link2.svg?react';
import LinkedinCircle from './icons/linkedin-circle.svg?react';
import LinkedInMenu from './icons/linkedin-menu.svg?react';
import LinkedIn from './icons/linkedin.svg?react';
import Location from './icons/location.svg?react';
import Logo from './icons/logo.svg?react';
import LogoBuilder from './icons/logobuilder.svg?react';
import MailBox from './icons/mailbox.svg?react';
import MessageBox from './icons/messageBox.svg?react';
import MessageColor from './icons/messageColor.svg?react';
import Moon from './icons/moon.svg?react';
import Pause from './icons/pause.svg?react';
import Pen from './icons/pen.svg?react';
import Phone from './icons/phone.svg?react';
import Play from './icons/play.svg?react';
import Plus from './icons/plus.svg?react';
import Prospect from './icons/prospect.svg?react';
import Question from './icons/question.svg?react';
import Recycle from './icons/recycle.svg?react';
import Reload from './icons/reload.svg?react';
import RingPlus from './icons/ringPlus.svg?react';
import Rotate from './icons/rotate.svg?react';
import Search from './icons/search.svg?react';
import Selling from './icons/selling.svg?react';
import Setting from './icons/setting.svg?react';
import Setting2 from './icons/setting2.svg?react';
import Setting3 from './icons/setting3.svg?react';
import Sharp from './icons/sharp.svg?react';
import Sort from './icons/sort.svg?react';
import Sun from './icons/sun.svg?react';
import Tag from './icons/tag.svg?react';
import Tags from './icons/tags.svg?react';
import Team from './icons/team.svg?react';
import Template from './icons/template.svg?react';
import ThreeBar from './icons/threeBar.svg?react';
import ThreeBarLeft from './icons/threeBarLeft.svg?react';
import Trash from './icons/trash.svg?react';
import Upload from './icons/upload.svg?react';
import User from './icons/user.svg?react';
import UserGroup from './icons/userGroup.svg?react';
import UserPlus from './icons/userPlus.svg?react';
import Users from './icons/users.svg?react';
import Visitor from './icons/visitor.svg?react';
import Warning from './icons/warning.svg?react';
import Web from './icons/web.svg?react';
import Zapier from './icons/zapier.svg?react';

export type IconType =
  | 'Apartment'
  | 'ArrowLeft'
  | 'ArrowUpDown'
  | 'Automation'
  | 'BarBox'
  | 'BarSetting'
  | 'Briefcase'
  | 'Book'
  | 'Building'
  | 'Calendar'
  | 'Card'
  | 'CheckRing'
  | 'Chevron'
  | 'ChevronDown'
  | 'ChevronUp'
  | 'Chip'
  | 'Coin'
  | 'Column'
  | 'Company'
  | 'Congratulation'
  | 'Cross'
  | 'DEmail'
  | 'DLinkedin'
  | 'DTask1'
  | 'DTask2'
  | 'Dashboard'
  | 'Dots9'
  | 'DownLoad'
  | 'Download2'
  | 'Earth'
  | 'EditPen'
  | 'Ellipsis'
  | 'EllipsisVertical'
  | 'Emoji'
  | 'FilterBar'
  | 'Exchange'
  | 'Exclamation'
  | 'ExclamationDark'
  | 'Eye'
  | 'EyeSlash'
  | 'HandUp'
  | 'HubSpot'
  | 'Inbox'
  | 'Lead'
  | 'Envelop'
  | 'Link'
  | 'Link2'
  | 'LinkedIn'
  | 'LinkedInMenu'
  | 'Location'
  | 'Logo'
  | 'LogoBuilder'
  | 'MailBox'
  | 'MessageBox'
  | 'MessageColor'
  | 'Moon'
  | 'Pause'
  | 'Pen'
  | 'People'
  | 'Phone'
  | 'Play'
  | 'Plus'
  | 'Question'
  | 'Recycle'
  | 'Reload'
  | 'RingPlus'
  | 'Rotate'
  | 'Search'
  | 'Selling'
  | 'Setting'
  | 'Setting2'
  | 'Sharp'
  | 'Sort'
  | 'Sun'
  | 'Setting3'
  | 'Team'
  | 'Template'
  | 'ThreeBar'
  | 'ThreeBarLeft'
  | 'Trash'
  | 'User'
  | 'UserGroup'
  | 'UserPlus'
  | 'Upload'
  | 'Users'
  | 'Visitor'
  | 'Warning'
  | 'Zapier'
  | 'Prospect'
  | 'Industry'
  | 'LinkedinCircle'
  | 'GiFairyWand'
  | 'GoLog'
  | 'Linkedin'
  | 'Tag'
  | 'Tags'
  | 'Circuit'
  | 'FiLogOut'
  | 'GoSortAsc'
  | 'GoSortDesc'
  | 'GoFilter'
  | 'Web';

type Props = {
  name: IconType;
  className?: string;
  id?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
};

const Icon: React.FC<Props> = ({ name, id, className, onClick }) => {
  if (!name) {
    return null;
  }

  const icons = {
    Apartment,
    ArrowLeft,
    ArrowUpDown,
    Automation,
    BarBox,
    BarSetting,
    Briefcase,
    Book,
    Building,
    Calendar,
    Card,
    CheckRing,
    Chevron,
    ChevronDown,
    ChevronUp,
    Coin,
    Chip,
    FilterBar,
    Column,
    Company,
    Congratulation,
    Cross,
    DEmail,
    DLinkedin,
    DTask1,
    DTask2,
    Dashboard,
    Dots9,
    DownLoad,
    Envelop,
    Download2,
    Earth,
    EditPen,
    Ellipsis,
    EllipsisVertical,
    Emoji,
    Exchange,
    Exclamation,
    ExclamationDark,
    Eye,
    EyeSlash,
    HandUp,
    HubSpot,
    Inbox,
    Lead,
    Link,
    Link2,
    LinkedIn,
    LinkedInMenu,
    Location,
    Logo,
    LogoBuilder,
    MailBox,
    MessageBox,
    MessageColor,
    Moon,
    Pause,
    Pen,
    People,
    Phone,
    Play,
    Plus,
    Question,
    Recycle,
    Reload,
    RingPlus,
    Rotate,
    Search,
    Selling,
    Setting,
    Setting2,
    Setting3,
    Sharp,
    Sort,
    Sun,
    Team,
    Template,
    ThreeBar,
    ThreeBarLeft,
    Trash,
    User,
    Upload,
    UserGroup,
    UserPlus,
    Users,
    Visitor,
    Warning,
    Zapier,
    Prospect,
    LinkedinCircle,
    Industry,
    Linkedin,
    GiFairyWand,
    GoLog,
    Tag,
    Tags,
    Circuit,
    FiLogOut,
    GoSortAsc,
    GoSortDesc,
    GoFilter,
    Web,
  };

  const CurrentIcon = icons[name];

  return (
    <CurrentIcon
      id={id}
      className={className}
      onClick={onClick}
      role={onClick && 'button'}
    />
  );
};

export default Icon;
