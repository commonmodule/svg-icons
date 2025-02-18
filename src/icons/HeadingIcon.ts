import { SvgIcon } from "@common-module/app-components";

export default class HeadingIcon extends SvgIcon {
  constructor() {
    super(
      ".heading",
      "0 -960 960 960",
      '<path d="M420-160v-520H200v-120h560v120H540v520H420Z"/>',
    );
  }
}
