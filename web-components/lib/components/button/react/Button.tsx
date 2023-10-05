import React from "react";
import useCustomElement from "../../../hooks/useCustomElement";
import { PocButton } from "../poc-button";
import "../poc-button";

type ButtonProps = {
  variant: "primary" | "default";
} & ButtonMappings;

type ButtonMappings = {
  onClick: VoidFunction;
  onButtonClicked: (e: CustomEvent) => void;
};

export function Button(props: Partial<ButtonProps>) {
  const { onClick } = props;

  const [customElementProps, ref] = useCustomElement<
    Partial<ButtonProps>,
    ButtonMappings,
    PocButton
  >(props, { onClick: "onclick", onButtonClicked: "button-clicked" });

  return (
    <poc-button {...customElementProps} ref={ref} onClick={onClick}>
      Book mine
    </poc-button>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "poc-button": React.DetailedHTMLProps<
        React.HTMLAttributes<PocButton>,
        PocButton
      >;
    }
  }
}
