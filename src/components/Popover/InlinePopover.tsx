/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./InlinePopover.scss";
import { default as InlineDialog } from "@atlaskit/inline-dialog";
import { Placement, Props } from "@atlaskit/inline-dialog/types";
import classNames from "classnames";
import { Enum } from "../../types";

export const INLINE_POPOVER_TYPE = Enum("light", "dark");
export type InlinePopoverType = keyof typeof INLINE_POPOVER_TYPE;
export type PopoverPlacement = Placement;

export interface InlinePopoverProps extends Omit<Props, "testId"> {
  isOpen: boolean;
  type?: InlinePopoverType;
}

export const InlinePopover: React.FC<InlinePopoverProps> = (props) => {
  const { content, children, isOpen, placement, type } = props;
  const popoverPlacement = placement || "right";

  return (
    <div className={classNames("inline-popover", type)}>
      <InlineDialog
        {...props}
        isOpen={!!content && isOpen}
        placement={popoverPlacement}
        testId={classNames("InlinePopover", popoverPlacement)}
      >
        {children}
      </InlineDialog>
    </div>
  );
};
