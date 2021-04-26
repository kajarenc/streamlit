"""Foo unit test."""
from unittest.mock import patch

import unittest

from tests import testutil
import streamlit as st


class FooTest(testutil.DeltaGeneratorTestCase):
    """Test st.foo"""

    def test_foo(self):
        st.foo("abcd")

        proto = self.get_delta_from_queue().new_element.foo
        self.assertEqual(proto.body, "dcba")

    def test_sidebar(self):
        """Test st.foo in the sidebar."""
        with patch("streamlit.delta_generator.DeltaGenerator.foo") as m:
            st.sidebar.foo("abracadabra")
            m.assert_called_once()
