import { Button, Dialog, DialogActions, TextField } from "@mui/material";

type Props = {
  text: string;
  onSubmit: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  dialogOpen: boolean;
  onToggleDialog: () => void;
};

export const FormDialog = (props: Props) => (
  // <form
  //   onSubmit={(e) => {
  //     e.preventDefault();
  //     props.onSubmit();
  //   }}
  // >
  //   <TextField value={props.text} onChange={props.onChange} />
  //   <Button value="追加" onSubmit={props.onSubmit} />
  // </form>
  <Dialog fullWidth open={props.dialogOpen} onClose={props.onToggleDialog}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit();
      }}
    >
      <div style={{ margin: "1em" }}>
        <TextField
          aria-label="todo-input"
          variant="standard"
          style={{
            width: "100%",
            fontSize: "16px",
            fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, sans-serif",
          }}
          label="タスクを入力..."
          onChange={(e) => props.onChange(e)}
          value={props.text}
          autoFocus
        />
        <DialogActions>
          <Button
            aria-label="form-add"
            color="secondary"
            onClick={props.onSubmit}
          >
            追加
          </Button>
        </DialogActions>
      </div>
    </form>
  </Dialog>
);
