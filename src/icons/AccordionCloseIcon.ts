import { SvgIcon } from "@commonmodule/app-components";

export default class AccordionCloseIcon extends SvgIcon {
  constructor() {
    super(
      ".accordion-close",
      "0 0 8 2",
      '<path fill="currentColor" fill-rule="evenodd" d="M0 1.5h8v-1H0v1Z" clip-rule="evenodd"></path>',
    );
  }
}
