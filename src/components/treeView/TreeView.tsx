import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView as TreeViewMUI } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

interface TreeViewProps {
  setFilters: (value: any) => void;
}
function TreeView({ setFilters }: TreeViewProps) {
  return (
    <TreeViewMUI
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      onNodeSelect={(e) => {
        // console.log(e.target.textContent);
        // setFilters((prev: any) => [...prev, e.target]);
      }}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem
          onClick={(e) => {
            console.log(e.target.textContent);
          }}
          nodeId="2"
          label="Calendar"
        />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeViewMUI>
  );
}

export default TreeView;
