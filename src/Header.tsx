import React from 'react';
import {
  styled,
  Button,
} from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopIcon from '@mui/icons-material/Laptop';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useEditorStore } from './store';
import FileMenu from './menus/FileMenu';

const PREFIX = 'Header';

const classes = {
  root: `${PREFIX}-root`,
  headerInner: `${PREFIX}-headerInner`,
  centerActions: `${PREFIX}-centerActions`,
};

const Root = styled('header')((
  {
    theme,
  },
) => ({
  display: 'none',
  background: 'white',
  borderBottom: `1px solid ${theme.palette.grey['300']}`,
  width: '100%',
  position: 'sticky',
  top: 0,
  lineHeight: 1,
  fontSize: theme.typography.fontSize,
  [theme.breakpoints.up('xs')]: {
    display: 'initial',
  },

  [`& .${classes.headerInner}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    '.MuiButton-root': {
      borderRadius: 0,
      minWidth: 0,
    },
  },

  [`& .${classes.centerActions}`]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'initial',
    },

    '.MuiButton-root': {
      padding: theme.spacing(1),
      margin: `0 ${theme.spacing(0.5)}`,
      '.MuiSvgIcon-root': {
        fontSize: theme.typography.fontSize * 1.6,
      },
    },
  },
}));

const Header: React.FC<{
  isFullScreen: boolean,
  onFullScreen?(): void,
  onExitFullScreen?(): void,
}> = (props) => {
  const {
    isFullScreen,
    onFullScreen,
    onExitFullScreen,
  } = props;
  const setPreviewWidth = useEditorStore((state) => state.setPreviewWidth);
  return (
    <Root className={classes.root}>
      <div className={classes.headerInner}>
        <div>
          <FileMenu />
        </div>
        <div className={classes.centerActions}>
          <Button onClick={() => setPreviewWidth('sm')}>
            <PhoneIphoneIcon />
          </Button>
          <Button onClick={() => setPreviewWidth('md')}>
            <TabletIcon />
          </Button>
          <Button onClick={() => setPreviewWidth('lg')}>
            <LaptopIcon />
          </Button>
        </div>
        {onFullScreen && onExitFullScreen && (
          <div>
            {isFullScreen && (
              <Button onClick={onFullScreen}>
                <FullscreenExitIcon />
              </Button>
            )}
            {!isFullScreen && (
              <Button onClick={onExitFullScreen}>
                <FullscreenIcon />
              </Button>
            )}
          </div>
        )}
      </div>
    </Root>
  );
};

export default Header;
