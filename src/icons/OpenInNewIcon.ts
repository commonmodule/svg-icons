import { SvgIcon } from "@commonmodule/app-components";

export default class OpenInNewIcon extends SvgIcon {
  constructor() {
    super(
      ".open-in-new",
      "-5 -5 20 20",
      '<path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>',
    );
  }
}
