import React from "react"
import { shallow } from "src/lib/test_util"
import { Foo as FooProto } from "src/autogen/proto"
import Foo, { FooProps } from "./Foo"

const getProps = (elementProps: Partial<FooProto> = {}): FooProps => ({
  element: FooProto.create({
    body: "abcd",
    ...elementProps,
  }),
})

describe("Text element", () => {
  it("renders reversed text as expected", () => {
    const props = getProps()
    const wrap = shallow(<Foo {...props} />)
    expect(wrap).toBeDefined()
    expect(wrap.text()).toBe("abcd")
  })
})
