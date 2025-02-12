/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ProgressModalPage, ProgressModalPageProps } from "./ProgressModalPage";
import "../../styles/icons/ab_icons.css";
import { Button } from "..";

export default {
  title: "Components/Page/ProgressModalPage",
  component: ProgressModalPage,
} as Meta;

const Template: Story<ProgressModalPageProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [step, setStep] = React.useState<number>(1);

  const clickPrev = () => {
    if (step === 1) return;
    setStep((prev) => prev - 1);
  };

  const clickNext = () => {
    if (step === args.stepLabels.length) return;
    setStep((prev) => prev + 1);
  };

  return (
    <div style={{ fontFamily: "Roboto" }}>
      {!isOpen && <Button onClick={() => setIsOpen(true)}>Open Progress Modal Page</Button>}
      {isOpen && (
        <ProgressModalPage {...args} onClose={() => setIsOpen(false)} step={step}>
          Click the X button to show the docs when you are in Docs section
          <div style={{ marginTop: 20 }}>
            <Button appearance="subtle" onClick={clickPrev}>
              Prev
            </Button>
            <Button onClick={clickNext}>Next</Button>
          </div>
        </ProgressModalPage>
      )}
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  title: "Progress Indicator Title",
  stepLabels: ["Step 1", "Step 2", "Step 3"],
};
