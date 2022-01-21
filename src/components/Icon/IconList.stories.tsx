/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import "../../styles/icons/ab_icons.css";
import { AccelIconsList, AddedIconList, MissingIcons } from "./IconList";
import { Button } from "../styled-atlaskit/Button/Button";
import { FieldLabel } from "../Form/utility";
import { HorizontalDivider } from "../Divider";

export default {
  title: "Iconography/Icons",
} as Meta;

interface IconsProps {
  iconsArray: string[];
}

const RenderIcons: React.FunctionComponent<IconsProps> = ({ iconsArray }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", rowGap: 20, fontFamily: "Roboto" }}>
      {iconsArray.map((icon, index) => (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} key={index}>
          <i className={icon} style={{ fontSize: 24, marginBottom: 10 }} />
          <span style={{ textAlign: "center" }}>{icon}</span>
        </div>
      ))}
    </div>
  );
};

export const AccelIcons: Story = () => {
  return (
    <>
      <div style={{ marginBottom: 25 }}>
        <FieldLabel label={`The AccelIcons based on Figma (${AccelIconsList.length}): `} />
        <RenderIcons iconsArray={AccelIconsList} />
      </div>
      <HorizontalDivider />
      <div style={{ marginBottom: 25 }}>
        <FieldLabel label={`The Added Icons based on Figma (${AddedIconList.length}): `} />
        <RenderIcons iconsArray={AddedIconList} />
      </div>
      <div style={{ marginBottom: 25 }}>
        <FieldLabel label={`The Missing Icons based on Figma (${MissingIcons.length}): `} />
        <RenderIcons iconsArray={MissingIcons} />
      </div>
    </>
  );
};

export const FeatherIcons: Story = () => {
  const handleButtonClicked = () => {
    const newWindow = window.open("https://feathericons.com/", "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div style={{ height: "100vh" }}>
      <FieldLabel label={"All the feather icons can be seen in their website"} />
      <Button onClick={() => handleButtonClicked()} appearance="outline">
        Go to Feather Icons
      </Button>
    </div>
  );
};
