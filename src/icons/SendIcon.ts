import { SvgIcon } from "@commonmodule/app-components";

export default class SendIcon extends SvgIcon {
  constructor() {
    super(
      ".send",
      "0 -960 960 960",
      '<path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>',
    );
  }
}
