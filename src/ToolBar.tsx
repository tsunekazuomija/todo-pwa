import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

type Props = {
  filter: Filter;
  onToggleDrawer: () => void;
}

const translator = (arg: Filter): string => {
  switch (arg) {
    case 'all':
      return '全てのタスク';
    case 'checked':
      return '完了したタスク';
    case 'unchecked':
      return '現在のタスク';
    case 'removed':
      return 'ゴミ箱';
    default:
      return 'TODO';
  }
}

export const ToolBar = (props: Props) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          aria-label="menu"
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={props.onToggleDrawer}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Typography>{translator(props.filter)}</Typography>
      </Toolbar>
    </AppBar>
  </Box>
);
