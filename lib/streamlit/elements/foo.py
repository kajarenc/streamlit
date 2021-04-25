from typing import cast

import streamlit
from streamlit.proto.Foo_pb2 import Foo as FooProto
from .utils import clean_text


class FooMixin:
    def foo(self, body):
        # TODO Add docstring
        foo_proto = FooProto()
        foo_proto.body = clean_text(body[::-1])
        return self.dg._enqueue("foo", foo_proto)

    @property
    def dg(self) -> "streamlit.delta_generator.DeltaGenerator":
        """Get our DeltaGenerator."""
        return cast("streamlit.delta_generator.DeltaGenerator", self)
