# Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
from unittest.mock import patch

from tests.interactive_scripts import InteractiveScriptTests


@patch("streamlit.source_util._cached_pages", new=None)
class InteractiveScriptTest(InteractiveScriptTests):
    def test_sliders_script(self):
        script = self.script_from_filename("radio_test_script.py")
        sr = script.run()

        # main and sidebar
        assert len(sr) == 2
        main = sr[0]

        assert len(main) == 2

        radio_group = sr.get_widget("radio_group_key")
        assert radio_group.value == 40

        sr2 = radio_group.set_value("50").run()

        radio_group = sr2[0].get_widget("radio_group_key")
        assert radio_group.value == 50
