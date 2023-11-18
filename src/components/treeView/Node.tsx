import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

interface NodeProps {
  node?: any;
  style?: any;
  dragHandle?: any;
  tree?: any;
}

export const Node = ({ node, style, dragHandle, tree }: NodeProps) => {
  return (
    <div style={style}>
      <div
        className="node-content"
        style={{
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => node.isInternal && node.toggle()}
      >
        {node.isLeaf ? (
          <span style={{ height: 42, width: 42 }}>
            <Checkbox />
          </span>
        ) : (
          <>
            <span style={{ height: 42, width: 42 }}>
              {node.isOpen ? (
                <KeyboardArrowDownRoundedIcon style={{ fontSize: 42 }} />
              ) : (
                <KeyboardArrowRightRoundedIcon style={{ fontSize: 42 }} />
              )}
            </span>
          </>
        )}
        <span className="node-text">
          <Typography>{node.data.name}</Typography>
        </span>
      </div>
    </div>
  );
};
