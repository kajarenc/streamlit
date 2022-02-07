/**
 * @license
 * Copyright 2018-2022 Streamlit Inc.
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

import React, { ReactElement } from "react"

import { ChevronDown } from "baseui/icon"

import { StatefulPopover, PLACEMENT, TRIGGER_TYPE } from "baseui/popover"

import { IAppPage } from "src/autogen/proto"

import {
  StyledNavButton,
  StyledPageList,
  StyledPageItem,
  StyledPageItemLabel,
  StyledLink,
} from "./styled-components"

export interface Props {
  pages?: IAppPage[]
  currentPage?: string
}

function setDisplayPage(pages?: IAppPage[], currentPage?: string): string {
  if (pages && pages[0] && currentPage === "") {
    return pages[0].pageName || ""
  }
  return currentPage || ""
}

function renderLinks(
  pageName: string,
  idx: number,
  disabled: boolean
): ReactElement {
  const pageItem = (
    <StyledPageItem
      key={pageName}
      isMainPage={idx === 0}
      isDisabled={disabled}
    >
      <StyledPageItemLabel isDisabled={disabled}>
        {pageName}
      </StyledPageItemLabel>
    </StyledPageItem>
  )

  return disabled ? (
    pageItem
  ) : (
    <StyledLink href={`/${pageName}`}>{pageItem}</StyledLink>
  )
}

function renderPages(pages?: IAppPage[], currentPage?: string): ReactElement {
  pages = pages || []
  const pageItems = pages.map((page, idx) => {
    const disabled = currentPage === page.pageName
    const pageName = page.pageName ? page.pageName : ""

    return renderLinks(pageName, idx, disabled)
  })

  return <StyledPageList isDisabled={false}>{pageItems}</StyledPageList>
}

function AppNavMenu(props: Props): ReactElement {
  const { pages, currentPage } = props
  const renderMenu = pages && pages.length > 1

  const displayPage = setDisplayPage(pages, currentPage)

  return (
    <>
      {renderMenu && (
        <StatefulPopover
          content={renderPages(pages, displayPage)}
          placement={PLACEMENT.bottomLeft}
          triggerType={TRIGGER_TYPE.hover}
          focusLock
          autoFocus
        >
          <StyledNavButton>
            {displayPage}
            <ChevronDown size={24} />
          </StyledNavButton>
        </StatefulPopover>
      )}
      {!renderMenu && <StyledNavButton>{displayPage}</StyledNavButton>}
    </>
  )
}

export default AppNavMenu
