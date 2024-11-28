import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text, TextField, Button } from '@aws-amplify/ui-react';
import MyIcon from './MyIcon';

export default function AddProduct(props) {
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="16px"
    direction="column"
    width="640px"
    justifyContent="flex-start"
    alignItems="flex-start"
    position="relative"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "AddProduct")}
    {...rest}
  >
    <Flex
      gap="24px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      padding="24px 24px 24px 24px"
      {...getOverrideProps(overrides, "Content")}
    >
      <Flex
        gap="16px"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Edit Profile")}
      >
        <MyIcon
          type="close"
          {...getOverrideProps(overrides, "MyIcon")}
        />
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          shrink="0"
          position="relative"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "Add Product")}
        >
          Add Product
        </Text>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Forms")}
      >
        <TextField
          label="Product Name"
          placeholder="Sony - Headphones"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField29766922")}
        />
        <TextField
          label="Price"
          placeholder="99 $"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField29766923")}
        />
        <TextField
          label="Image Url"
          placeholder="https://www.google.com/"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField29766924")}
        />
      </Flex>
      <Button
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button")}
      >
        Add
      </Button>
    </Flex>
  </Flex>
  )
}
