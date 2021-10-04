/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import classNames from "classnames";
import { Button, ButtonProps } from "../styled-atlaskit/Button/Button";

interface ButtonWithIconProps extends ButtonProps {
  buttonIcon?: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = (props) => {
  const { buttonIcon, appearance = "primary", isDisabled, isLoading = false, className, ...buttonProps } = props;
  return (
    <Button
      appearance={appearance}
      isLoading={isLoading}
      className={classNames(className, { disabled: isDisabled })}
      {...buttonProps}
    >
      {!!buttonIcon && <span className={classNames("icon", buttonIcon)} />}
      {buttonProps.children}
    </Button>
  );
};

export default ButtonWithIcon;
