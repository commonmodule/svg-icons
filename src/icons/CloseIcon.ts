import { SvgIcon } from "@commonmodule/app-components";

export default class CloseIcon extends SvgIcon {
  constructor() {
    super(
      ".close",
      "0 -960 960 960",
      '<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>',
    );
  }
}
