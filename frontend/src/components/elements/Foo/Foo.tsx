import React, { ReactElement } from "react"
import { Foo as FooProto } from "src/autogen/proto"

export interface FooProps {
  element: FooProto
}

/**
 * Functional element representing reversed text.
 */
export default function Foo({ element }: FooProps): ReactElement {
  return <div>{element.body}</div>
}
