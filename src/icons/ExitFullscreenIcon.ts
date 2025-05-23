import { SvgIcon } from "@commonmodule/app-components";

export default class ExitFullscreenIcon extends SvgIcon {
  constructor() {
    super(
      ".exit-fullscreen",
      "0 -960 960 960",
      '<path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z"/>',
    );
  }
}
