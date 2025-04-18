import { SvgIcon } from "@commonmodule/app-components";

export default class CodeIcon extends SvgIcon {
  constructor() {
    super(
      ".code",
      "0 -960 960 960",
      '<path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/>',
    );
  }
}
