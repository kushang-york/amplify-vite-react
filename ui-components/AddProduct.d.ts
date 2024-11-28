
import * as React from 'react';
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps, TextFieldProps, ButtonProps } from '@aws-amplify/ui-react';

export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;

export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;

export declare type AddProductOverridesProps = {
  'MyIcon'?: MyIconProps;
  'Add Product'?: PrimitiveOverrideProps<TextProps>;
  'Edit Profile'?: PrimitiveOverrideProps<FlexProps>;
  'TextField29766922'?: PrimitiveOverrideProps<TextFieldProps>;
  'TextField29766923'?: PrimitiveOverrideProps<TextFieldProps>;
  'TextField29766924'?: PrimitiveOverrideProps<TextFieldProps>;
  'Forms'?: PrimitiveOverrideProps<FlexProps>;
  'Button'?: PrimitiveOverrideProps<ButtonProps>;
  'Content'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type AddProductProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: AddProductOverridesProps | undefined | null;
}>;

export default function AddProduct(props: AddProductProps): React.ReactElement;
  