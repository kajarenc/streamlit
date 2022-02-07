/**
 * @license
 * Copyright 2018-2021 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/styled"

export const StyledNavButton = styled.button(({ theme }) => ({
  color: theme.colors.bodyText,
  border: "none",
  backgroundColor: theme.colors.transparent,
  ":focus": {
    outline: "none",
  },
}))

export interface ItemProps {
  isMainPage?: boolean
  isDisabled: boolean
}

export const StyledPageList = styled.ul<ItemProps>(({ isDisabled, theme }) => {
  const disabledStyles = isDisabled
    ? {
        backgroundColor: theme.colors.transparent,
        color: theme.colors.fadedText60,
        cursor: "not-allowed",
      }
    : {}

  return {
    display: "block",
    flexDirection: "row",
    alignItems: "flex-start",
    cursor: "pointer",
    marginTop: theme.spacing.md,
    ...disabledStyles,
  }
})

export const StyledPageItem = styled.li<ItemProps>(
  ({ isMainPage, isDisabled, theme }) => {
    const space = theme.spacing
    const mainPageSpacing = `${space.xs} ${space.twoXL} ${space.xs} ${space.xl}`
    const disabledStyles = isDisabled
      ? {
          backgroundColor: theme.colors.secondaryBg,
          fontWeight: 700,
          cursor: "not-allowed",
        }
      : {}

    return {
      margin: "0",
      padding: isMainPage
        ? mainPageSpacing
        : `${space.twoXS} ${space.threeXL}`,
      fontSize: theme.fontSizes.md,
      display: "block",
      "&:hover": {
        backgroundColor: theme.colors.secondaryBg,
        outline: "none",
      },
      ...disabledStyles,
    }
  }
)

export const StyledPageItemLabel = styled.span<ItemProps>(
  ({ isDisabled, theme }) => ({
    cursor: isDisabled ? "not-allowed" : "pointer",
    color: theme.colors.bodyText,
    marginRight: theme.spacing.md,
    flexGrow: 1,
    // We do not want to change the font for this based on theme.
    fontFamily: theme.fonts.sansSerif,
  })
)

export const StyledLink = styled.a(() => ({
  textDecoration: "none",
  ":focus": {
    outline: "none",
  },
  "&:hover": {
    textDecoration: "none",
  },
}))
