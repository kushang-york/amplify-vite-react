
import * as React from 'react';

import { FlexProps, ImageProps, TextProps } from '@aws-amplify/ui-react';

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

export declare type ProductOverridesProps = {
  'image'?: PrimitiveOverrideProps<ImageProps>;
  '$99 USD'?: PrimitiveOverrideProps<TextProps>;
  'Product Name'?: PrimitiveOverrideProps<TextProps>;
  'Text Group'?: PrimitiveOverrideProps<FlexProps>;
  'Card Area'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type ProductProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: ProductOverridesProps | undefined | null;
}>;

export default function Product(props: ProductProps): React.ReactElement;
  